import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

const appElement = document.getElementById('application');
const prerenderedObjId = appElement.getAttribute('data-scrivito-prerendering-obj-id');

if (prerenderedObjId) {
  Scrivito.load(
    () => Scrivito.Obj.get(prerenderedObjId)
  ).then(
    obj => Scrivito.load(
      () => Scrivito.withPage(
        obj,
        () => ReactDOMServer.renderToStaticMarkup(<App />)
      )
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
