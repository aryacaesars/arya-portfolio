import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE
  ? pathToFileURL(path.join(process.env.PLAYWRIGHT_MODULE, 'index.mjs')).href
  : 'playwright');

const browser = await chromium.launch({ headless: true });
const errors = [];
await fs.mkdir('.next/browser-checks', { recursive: true });

async function positions(page) {
  return page.locator('#services button[aria-label^="Move "]').evaluateAll(elements => elements.map(element => {
    const rect = element.getBoundingClientRect();
    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
  }));
}

async function checkBounds(page) {
  const area = await page.getByRole('group', { name: 'Draggable services playground' }).boundingBox();
  const cards = await positions(page);
  assert.equal(cards.length, 6);
  for (const [i, a] of cards.entries()) {
    assert(a.x >= area.x - 1 && a.y >= area.y - 1 && a.x + a.width <= area.x + area.width + 1 && a.y + a.height <= area.y + area.height + 1, 'Card escaped playground');
    for (const b of cards.slice(i + 1)) {
      assert(Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x) < 1 || Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y) < 1, 'Cards overlap');
    }
  }
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'Horizontal page overflow');
}

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(process.env.PORTFOLIO_URL || 'http://localhost:3107', { waitUntil: 'networkidle' });
  const previews = page.locator('#projects img');
  assert.equal(await previews.count(), 5);
  for (const preview of await previews.all()) {
    await preview.scrollIntoViewIfNeeded();
    await preview.evaluate(image => image.decode());
    assert(await preview.evaluate(image => image.naturalWidth > 0));
  }
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  await page.screenshot({ path: '.next/browser-checks/projects-desktop.png' });

  const first = page.getByRole('button', { name: 'Move Full-Stack Development', exact: true });
  await first.scrollIntoViewIfNeeded();
  const initial = await positions(page);
  await page.mouse.move(initial[0].x + 50, initial[0].y + 40);
  await page.mouse.down();
  await page.mouse.move(initial[0].x + 190, initial[0].y + 40, { steps: 12 });
  await page.mouse.up();
  const moved = await positions(page);
  assert(moved[0].x > initial[0].x + 50, 'Mouse drag did not move the card');
  assert(moved[1].x > initial[1].x + 30, 'Neighbour was not pushed');
  await checkBounds(page);
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  assert(Math.abs((await positions(page))[0].x - initial[0].x) < 1, 'Reset did not restore layout');
  await first.focus();
  await page.keyboard.press('ArrowRight');
  assert(Math.abs((await positions(page))[0].x - initial[0].x - 16) < 1, 'Keyboard movement failed');
  for (let i = 0; i < 45; i++) await page.keyboard.press('ArrowRight');
  await checkBounds(page);
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  await page.locator('#services').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: '.next/browser-checks/services-desktop.png' });
  await page.setViewportSize({ width: 768, height: 1000 });
  await page.waitForTimeout(200);
  await first.scrollIntoViewIfNeeded();
  await checkBounds(page);

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
  mobile.on('pageerror', error => errors.push(error.message));
  await mobile.goto(process.env.PORTFOLIO_URL || 'http://localhost:3107', { waitUntil: 'networkidle' });
  await mobile.getByRole('button', { name: 'Move Full-Stack Development', exact: true }).scrollIntoViewIfNeeded();
  const before = await positions(mobile);
  const cdp = await mobile.context().newCDPSession(mobile);
  const x = before[0].x + 80;
  const y = before[0].y + 40;
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  for (let step = 1; step <= 8; step++) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y + step * 10 }] });
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  const after = await positions(mobile);
  assert(after[0].y > before[0].y + 10, 'Touch dragging failed');
  assert(after[1].y > before[1].y, 'Touch drag did not push its neighbour');
  await checkBounds(mobile);
  await mobile.getByRole('button', { name: 'Reset', exact: true }).click();
  await mobile.getByRole('group', { name: 'Draggable services playground' }).scrollIntoViewIfNeeded();
  await mobile.screenshot({ path: '.next/browser-checks/services-mobile.png' });
  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log('PASS: five screenshot images load; desktop drag/push, boundary collisions, keyboard, reset, resize, mobile touch, and no horizontal overflow.');
} finally {
  await browser.close();
}
