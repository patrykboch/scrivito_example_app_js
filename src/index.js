import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

const appElement = document.getElementById('application');

function renderApp() {
  ReactDOM.render(<App />, appElement);
}

function preloadAndRenderApp(preloadDump) {
  Scrivito.preload(preloadDump).then(renderApp);
}

if (appElement.getAttribute('data-scrivito-prerendering-obj-id')) {
  // html is prerendered
  if (window.preloadDump) {
    preloadAndRenderApp(window.preloadDump);
  } else {
    // register global callback, so that the preloadDump can execute it once loaded.
    window.preloadAndRenderApp = preloadAndRenderApp;
  }
} else {
  renderApp();
}
