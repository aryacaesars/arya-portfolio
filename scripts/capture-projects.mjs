import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE
  ? pathToFileURL(path.join(process.env.PLAYWRIGHT_MODULE, 'index.mjs')).href
  : 'playwright');

const targets = [
  ['toogas', 'https://toogas.vercel.app/'],
  ['ciao', 'https://ciao-pink.vercel.app/'],
  ['diajar', 'https://diajar-quiz.vercel.app/'],
  ['let-it-cook', 'https://letitcook.vercel.app/'],
  ['etalase', 'https://www.storefront-etalase.web.id/'],
];

(async () => {
  const directory = path.join(process.cwd(), 'public/projects');
  await fs.mkdir(directory, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const results = [];
  try {
    for (const [name, url] of targets) {
      const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
      try {
        const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
        if (!response || response.status() >= 400) throw new Error(`HTTP ${response?.status()}`);
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(2000);
        await page.screenshot({ path: path.join(directory, `${name}.png`), animations: 'disabled' });
        results.push({ name, requestedUrl: url, finalUrl: page.url(), title: await page.title(), capturedAt: new Date().toISOString(), viewport: { width: 1440, height: 1000 } });
      } catch (error) {
        results.push({ name, requestedUrl: url, error: error.message });
      } finally {
        await page.close();
      }
      console.log(JSON.stringify(results.at(-1)));
    }
    await fs.writeFile(path.join(directory, 'sources.json'), JSON.stringify(results, null, 2) + '\n');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
