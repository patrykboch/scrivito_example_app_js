import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

function preloadHomepage() {
  // TODO Load "homepage" callback of "Scrivito.configure", if configured
  Scrivito.Obj.root();
}

function preloadPermalink() {
  // TODO remove "routingBasePath" of "Scrivito.configure" from path, if configured
  const pathToRecognize = window.location.pathname;
  const path = pathToRecognize.replace(new RegExp('^/+|/+$', 'g'), '');
  if (!path) { return; }
  Scrivito.Obj.getByPermalink(path);
}

const appElement = document.getElementById('application');
const prerenderedObjId = appElement.getAttribute('data-scrivito-prerendering-obj-id');

function renderApp() {
  ReactDOM.render(<App />, appElement);
}

if (prerenderedObjId && window.preloadDump) {
  Scrivito.preload(window.preloadDump)
    .then(
      () => Scrivito.load(
        () => {
          preloadHomepage();
          preloadPermalink();
        }
      )
    ).then(renderApp);
} else {
  window.prerenderReady = false;
  renderApp();
  Scrivito.finishLoading().then(() => { window.prerenderReady = true; });
}
