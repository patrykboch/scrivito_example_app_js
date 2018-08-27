import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

let preloadDump = '';
const preloadDumpElement = document.getElementById('preloadDump');
if (preloadDumpElement) {
  const preloadDumpData = preloadDumpElement.getAttribute('data-scrivito-preload-dump');
  preloadDump = decodeURIComponent(preloadDumpData);
}

Scrivito.preload(preloadDump).then(() => {
  ReactDOM.render(<App />, document.getElementById('application'));
});
