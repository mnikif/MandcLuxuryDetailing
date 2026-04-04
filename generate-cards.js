const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  // deviceScaleFactor 3 renders the card at ~300 DPI (3.5"x2" card)
  await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 3 });

  const frontPath = 'file:///' + path.resolve('public/business-card-front.html').split('\\').join('/');
  const backPath  = 'file:///' + path.resolve('public/business-card-back.html').split('\\').join('/');

  // Front
  await page.goto(frontPath, { waitUntil: 'networkidle0' });
  const frontCard = await page.$('.card');
  await frontCard.screenshot({ path: 'public/business-card-front.png' });
  console.log('Front saved → public/business-card-front.png');

  // Back
  await page.goto(backPath, { waitUntil: 'networkidle0' });
  const backCard = await page.$('.card');
  await backCard.screenshot({ path: 'public/business-card-back.png' });
  console.log('Back saved → public/business-card-back.png');

  await browser.close();
})();
