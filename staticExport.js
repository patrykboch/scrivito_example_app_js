const express = require('express');
const fs = require('fs');
const fse = require('fs-extra');
const nodeUrl = require('url');
const path = require('path');
const puppeteer = require('puppeteer');

const TARGET_DIR = 'build';

async function staticExport() {
  console.time('[staticExport]');
  console.log('[staticExport] Starting...');

  const exportedObjs = await exportObjs();

  await fse.move(`${ TARGET_DIR }/index.html`, `${ TARGET_DIR }/fallback_index.html`);

  console.log(`[staticExport] Writing ${ exportedObjs.length } html files to disk...`);
  writeObjsToDisk(exportedObjs);

  console.log('[staticExport] Cleaning up files _export_objs.html and export_objs.js ...');
  await fse.remove(`${TARGET_DIR}/_export_objs.html`);
  await fse.remove(`${TARGET_DIR}/export_objs.js`);

  console.log(
    `[staticExport] 📦 Enriched folder ${ TARGET_DIR } with ${ exportedObjs.length } files!`);

  console.timeEnd('[staticExport]');
}

async function exportObjs() {
  console.log('  [exportObjs] 🗄️  Starting express server...');
  const server = await startServer();
  console.log('  [exportObjs] 🗄️  Express server started...');

  console.log('  [exportObjs] 🖥️️  Starting browser...');
  const browser = await puppeteer.launch();

  console.log('  [exportObjs] 🖥️️  Visiting http://localhost:8080/_export_objs.html ...');
  const page = await browser.newPage();
  try {
    await page.goto('http://localhost:8080/_export_objs.html');
  } catch (e) {
    console.log('  [exportObjs] 🖥️️  ❌  Could not visit http://localhost:8080/_export_objs.html!' +
      ' Is a webserver running on 8080?');
    throw e;
  }

  console.log('  [exportObjs] 🖥️️  Generating results...');
  const results = await page.evaluate(() => exportObjs());
  console.log(`  [exportObjs] 🖥️️  Generated ${ results.length } results.`);

  console.log('  [exportObjs] 🖥️️  Closing the browser...');
  await browser.close();

  console.log('  [exportObjs] 🗄️  Closing express server...');
  await server.close();

  return results;
}

function startServer() {
  const buildPath = path.join(__dirname, 'build');
  const app = express();
  const staticMiddleware = express.static(buildPath);
  app.use(staticMiddleware);

  let server;
  return new Promise((resolve, reject) => {
    server = app.listen(8080, () => resolve(server));
  });
}

function writeObjsToDisk(results) {
  results.forEach(result => {
    const { objId, objUrl, bodyContent } = result;
    const fileName = filenameFromUrl(objUrl);
    console.log(`  [writeObjsToDisk] Writing ${ fileName } (${ objId }) to disk...`);
    const htmlContent = generateHtml(bodyContent);
    fse.outputFileSync(`${ TARGET_DIR }/${ fileName }`, htmlContent);
  });
}

function filenameFromUrl(url) {
  const uri = nodeUrl.parse(url);
  const pathname = uri.pathname;
  if (pathname === '/') {
    return '/index.html';
  }

  return `${ pathname }.html`;
}

function generateHtml(bodyContent) {
  // TODO: Remove workaround for host containing urls from scrivito.
  const body = bodyContent.replace(/http:\/\/localhost\:8080/g, '');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="generator" content="Scrivito by Infopark AG (scrivito.com)">

  <title>Welcome to the Scrivito Example App!</title>
  <link rel="stylesheet" href="/index.css">
</head>
<body>
  <div id="application" data-scrivito-prerendered="true">
    ${ body }
  </div>
  <script async src="/index.js"></script>
</body>
</html>`;
}

staticExport().catch(e => {
  console.log('❌ An error occurred!', e);
  process.exit(1);
});
