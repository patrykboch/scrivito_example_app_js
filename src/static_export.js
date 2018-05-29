import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

const blacklistObjClasses = [
  'Download',
  'Image',
  'Redirect',
  'SearchResults',
  'Video',
];

function allObjs() {
  return [...Scrivito.Obj.all().andNot('_objClass', 'equals', blacklistObjClasses)];
}

function exportObj(obj) {
  return Scrivito.load(() =>
    Scrivito.withPage(obj, () => {
      const url = Scrivito.urlFor(obj);
      const content = ReactDOMServer.renderToString(<App />);
      return [url, content];
    })
  );
}

function exportObjs() {
  console.time('[exportObjs]');
  console.time(`[exportObjs] Load all objs`);
  return Scrivito.load(allObjs).then(objs => {
    console.timeEnd(`[exportObjs] Load all objs`);
    const results = {};

    console.time(`[exportObjs] Export ${ objs.length } objs`);
    const promises = objs.map(obj => {
      console.time(`[exportObjs] Export obj ${ obj.id() }`);
      return exportObj(obj).then(([url, content]) => {
        console.timeEnd(`[exportObjs] Export obj ${ obj.id() }`);
        results[url] = content;
      })
    });

    return Promise.all(promises).then(() => {
      console.timeEnd(`[exportObjs] Export ${ objs.length } objs`);
      console.timeEnd('[exportObjs]');
      return results;
    });
  })
}

// Usage: window.exportObjs().then(results => ...);
window.exportObjs = exportObjs;
