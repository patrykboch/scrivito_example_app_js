import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

function preloadHomepage() {
  // TODO Load "homepage" callback of "Scrivito.configure", if configured
  return Scrivito.Obj.root();
}

function preloadPermalink() {
  // TODO remove "routingBasePath" of "Scrivito.configure" from path, if configured
  const pathToRecognize = window.location.pathname;
  const path = pathToRecognize.replace(new RegExp('^/+|/+$', 'g'), '');
  return Scrivito.Obj.getByPermalink(path);
}

const appElement = document.getElementById('application');
const prerenderedObjId = appElement.getAttribute('data-scrivito-prerendering-obj-id');

if (prerenderedObjId) {
  Scrivito.load(
    () => Scrivito.Obj.get(prerenderedObjId)
  ).then(
    obj => Scrivito.load(
      () => {
        preloadHomepage();
        preloadPermalink();
        return Scrivito.withPage(
          obj,
          () => ReactDOMServer.renderToStaticMarkup(<App />)
        );
      }
    )
  ).then(
    () => {
      ReactDOM.render(<App />, appElement);
    }
  );
} else {
  window.prerenderReady = false;
  ReactDOM.render(<App />, appElement);
  Scrivito.finishLoading().then(() => { window.prerenderReady = true; });
}
