/* eslint no-console: "off" */
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';
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
  // Tell helmet to pretend to run on a node server, not in a browser
  // See https://github.com/nfl/react-helmet/issues/310 for details
  Helmet.canUseDOM = false;

  return Scrivito.load(() =>
    Scrivito.withPage(obj, () => {
      const bodyContent = ReactDOMServer.renderToStaticMarkup(<App />);
      const helmet = Helmet.renderStatic();
      return {
        objId: obj.id(),
        objUrl: Scrivito.urlFor(obj),
        htmlAttributes: helmet.htmlAttributes.toString(),
        headContent: `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        `,
        bodyAttributes: helmet.bodyAttributes.toString(),
        bodyContent,
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
