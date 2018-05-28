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
  return Scrivito.load(allObjs).then(objs => {
    const results = {};

    const promises = objs.map(obj =>
      exportObj(obj).then(([url, content]) => {
        results[url] = content;
      })
    );

    return Promise.all(promises).then(() => results);
  })
}

// Usage: window.exportObjs().then(results => ...);
window.exportObjs = exportObjs;
