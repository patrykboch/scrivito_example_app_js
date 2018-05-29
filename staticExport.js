const puppeteer = require('puppeteer');

async function staticExport() {
  console.time('[staticExport]');
  console.log('Starting browser...');
  const browser = await puppeteer.launch();

  console.log('Visiting http://localhost:8080/_static_export.html ...');
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/_static_export.html');

  console.log('Generating results...');
  const results = await page.evaluate(() => exportObjs());
  console.log(`Generated ${ results.length } results.`);

  console.log('Closing the browser...');
  await browser.close();

  console.timeEnd('[staticExport]');
}

staticExport();
