export type CardBox = { x: number; y: number; width: number; height: number };
export type Bounds = { width: number; height: number };

export function arrangeCards(count: number, bounds: Bounds): CardBox[] {
  const columns = bounds.width >= 900 ? 3 : bounds.width >= 540 ? 2 : 1;
  const width = Math.min(250, (bounds.width - 32 - (columns - 1) * 20) / columns);
  const height = 80;
  const rows = Math.ceil(count / columns);
  const startX = (bounds.width - columns * width - (columns - 1) * 20) / 2;
  const startY = Math.max(12, (bounds.height - rows * height - (rows - 1) * 20) / 2);
  return Array.from({ length: count }, (_, i) => ({
    x: startX + (i % columns) * (width + 20),
    y: startY + Math.floor(i / columns) * (height + 20),
    width,
    height,
  }));
}

// Six axis-aligned cards: pushing propagates through neighbours until a wall stops it.
export function moveCard(cards: CardBox[], index: number, dx: number, dy: number, bounds: Bounds): CardBox[] {
  const next = cards.map(card => ({ ...card }));
  if (!next[index]) return next;

  function push(i: number, delta: number, axis: "x" | "y"): number {
    if (!delta || !Number.isFinite(delta)) return 0;
    const size = axis === "x" ? "width" : "height";
    const cross = axis === "x" ? "y" : "x";
    const crossSize = axis === "x" ? "height" : "width";
    const direction = Math.sign(delta);
    const card = next[i];
    let distance = Math.min(Math.abs(delta), direction > 0
      ? bounds[size] - card[axis] - card[size]
      : card[axis]);
    const neighbours = next.map((other, j) => ({ other, j })).filter(({ other, j }) =>
      j !== i && card[cross] < other[cross] + other[crossSize] &&
      card[cross] + card[crossSize] > other[cross] &&
      (direction > 0 ? other[axis] >= card[axis] + card[size] - 0.001 : other[axis] + other[size] <= card[axis] + 0.001)
    ).sort((a, b) => direction * (a.other[axis] - b.other[axis]));

    for (const { other, j } of neighbours) {
      const gap = Math.max(0, direction > 0
        ? other[axis] - card[axis] - card[size]
        : card[axis] - other[axis] - other[size]);
      if (gap < distance) {
        const pushed = Math.abs(push(j, direction * (distance - gap), axis));
        distance = Math.min(distance, gap + pushed);
      }
    }
    const movement = direction * Math.max(0, distance);
    card[axis] += movement;
    return movement;
  }

  push(index, dx, "x");
  push(index, dy, "y");
  return next;
}
