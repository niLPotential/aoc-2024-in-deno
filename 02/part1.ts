export function part1(input: Uint8Array) {
  let report = [];
  let level = 0;
  let count = 0;
  for (const byte of input) {
    switch (byte) {
      case 32:
        report.push(level);
        level = 0;
        break;
      case 10:
        report.push(level);
        level = 0;
        verifySafety(report) && count++;
        report = [];
        break;
      default:
        level *= 10;
        level += byte - 48;
    }
  }
  return count;
}

function verifySafety(report: number[]) {
  let direction = "";
  if (report[1] - report[0] > 0) {
    direction = "increasing";
  } else if (report[1] - report[0] < 0) {
    direction = "decreasing";
  } else {
    return false;
  }
  for (let i = 1; i < report.length; i++) {
    switch (report[i] - report[i - 1]) {
      case 1:
      case 2:
      case 3:
        if (direction !== "increasing") {
          return false;
        }
        break;
      case -1:
      case -2:
      case -3:
        if (direction !== "decreasing") {
          return false;
        }
        break;
      default:
        return false;
    }
  }
  return true;
}
