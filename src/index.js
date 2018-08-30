import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('application'));
}

if (window.preloadDump) {
  Scrivito.preload(window.preloadDump).then(renderApp);
} else {
  renderApp();
}
