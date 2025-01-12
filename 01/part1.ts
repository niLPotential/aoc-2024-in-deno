export function part1(input: Uint8Array) {
  const { left, right } = readData(input);
  left.sort();
  right.sort();
  return totalDistance(left, right);
}

function readData(input: Uint8Array) {
  const left = [];
  const right = [];
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
        right.push(n);
        n = 0;
        break;
      default:
        n *= 10;
        n += byte - 48;
    }
  }
  return { left, right };
}

function totalDistance(left: number[], right: number[]) {
  let total = 0;
  for (let i = 0; i < left.length; i++) {
    total += Math.abs(left[i] - right[i]);
  }
  return total;
}
