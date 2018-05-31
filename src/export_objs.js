/* eslint no-console: "off" */
import * as React from 'react';
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
      return {
        objId: obj.id(),
        objUrl: Scrivito.urlFor(obj),
        bodyContent: ReactDOMServer.renderToStaticMarkup(<App />),
      };
    })
  );
}

function exportObjs() {
  console.time('[exportObjs]');
  console.time('Loading all objs');
  return Scrivito.load(allObjs).then(objs => {
    console.timeEnd('Loading all objs');

    console.time(`Exporting ${objs.length} objs`);
    const promises = objs.map(obj => {
      console.time(`Exporting obj ${obj.id()}`);
      return exportObj(obj).then(result => {
        console.timeEnd(`Exporting obj ${obj.id()}`);
        return result;
      });
    });

    return Promise.all(promises).then(results => {
      console.timeEnd(`Exporting ${objs.length} objs`);
      console.timeEnd('[exportObjs]');
      return results;
    });
  });
}

// Usage: window.exportObjs().then(results => ...);
window.exportObjs = exportObjs;
