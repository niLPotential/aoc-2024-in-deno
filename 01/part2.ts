export function part2(input: Uint8Array) {
  const { left, right } = readData(input);
  return getSimilarityScore(left, right);
}

function readData(input: Uint8Array) {
  const left = [];
  const right = new Map<number, number>();
  let n = 0;
  for (const byte of input) {
    switch (byte) {
      case 32: // space
        if (n !== 0) {
          left.push(n);
        }
        n = 0;
        break;
      case 10: // new line
        right.set(n, (right.get(n) ?? 0) + 1);
        n = 0;
        break;
      default:
        n *= 10;
        n += byte - 48; // char 0
    }
  }
  return { left, right };
}

function getSimilarityScore(left: number[], right: Map<number, number>) {
  let score = 0;
  for (const n of left) {
    // @ts-ignore: guaranteed existance
    score += n * (right.get(n) ?? 0);
  }
  return score;
}
