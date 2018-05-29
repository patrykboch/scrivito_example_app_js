const puppeteer = require('puppeteer');
const nodeUrl = require('url');
const fs = require('fs');
const fse = require('fs-extra');

const TARGET_DIR = 'build_static';

const ASSET_FILE_EXTENTIONS = [
  'css',
  'eot',
  'gif',
  'png',
  'svg',
  'ttf',
  'woff',
  'woff2',
];

async function staticExport() {
  console.time('[staticExport]');
  console.log('[staticExport] Starting...');

  const exportedObjs = await exportObjs();

  console.log(`[staticExport] Cleaning folder ${ TARGET_DIR }/ ...`);
  await fse.remove(TARGET_DIR);
  await fse.ensureDir(TARGET_DIR);

  console.log('[staticExport] Copying over assets...');
  copyAssets();

  console.log('[staticExport] Writing html to disk...');
  writeObjsToDisk(exportedObjs);

  console.log(`[staticExport] 🚀 All files are now available in folder ${ TARGET_DIR }!`);

  console.timeEnd('[staticExport]');
}

async function exportObjs() {
  console.log('  [exportObjs] Starting browser...');
  const browser = await puppeteer.launch();

  console.log('  [exportObjs] Visiting http://localhost:8080/_static_export.html ...');
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/_static_export.html');

  console.log('  [exportObjs] Generating results...');
  const results = await page.evaluate(() => exportObjs());
  console.log(`  [exportObjs] Generated ${ results.length } results.`);

  console.log('  [exportObjs] Closing the browser...');
  await browser.close();

  return results;
}

function copyAssets() {
  const filesInBuildFolder = fs.readdirSync('build/');
  filesInBuildFolder.forEach(fileName => {
    if (ASSET_FILE_EXTENTIONS.some(extension => fileName.endsWith(`.${ extension }`))) {
      fse.copySync(`build/${ fileName }`, `${ TARGET_DIR }/${ fileName }`);
    }
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
${ bodyContent }
</body>
</html>`;
}

staticExport();
