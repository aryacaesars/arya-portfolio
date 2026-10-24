import assert from 'node:assert/strict';
import { arrangeCards, moveCard } from '../lib/service-playground.ts';

function check(cards, bounds) {
  for (const [i, a] of cards.entries()) {
    assert(a.x >= -0.001 && a.y >= -0.001, 'Card escaped the top/left boundary');
    assert(a.x + a.width <= bounds.width + 0.001 && a.y + a.height <= bounds.height + 0.001, 'Card escaped the bottom/right boundary');
    for (const b of cards.slice(i + 1)) {
      const overlapX = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
      const overlapY = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
      assert(overlapX < 0.001 || overlapY < 0.001, 'Cards overlap');
    }
  }
}

const row = [0, 120, 240].map(x => ({ x, y: 0, width: 100, height: 80 }));
const pushed = moveCard(row, 0, 200, 0, { width: 400, height: 160 });
assert.deepEqual(pushed.map(card => card.x), [100, 200, 300], 'A card should push its neighbours up to the wall');
assert.deepEqual(row.map(card => card.x), [0, 120, 240], 'Input state must stay immutable');
const reversed = moveCard(pushed, 2, -200, 0, { width: 400, height: 160 });
assert.deepEqual(reversed.map(card => card.x), [0, 100, 200]);

let seed = 12345;
function random() { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 2 ** 32; }
for (const bounds of [{ width: 270, height: 640 }, { width: 590, height: 440 }, { width: 940, height: 400 }, { width: 1280, height: 400 }]) {
  let cards = arrangeCards(6, bounds);
  check(cards, bounds);
  for (let i = 0; i < 2000; i++) {
    cards = moveCard(cards, Math.floor(random() * 6), (random() - 0.5) * 600, (random() - 0.5) * 600, bounds);
    check(cards, bounds);
  }
}
console.log('PASS: collision chains, reverse pushes, immutable state, and 8,000 bounded moves across mobile/tablet/desktop.');
