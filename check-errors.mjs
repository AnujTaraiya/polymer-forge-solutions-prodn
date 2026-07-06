import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

  console.log('Navigating to local preview...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  
  console.log('Done.');
  await browser.close();
})();
