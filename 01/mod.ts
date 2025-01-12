import { part1 } from "./part1.ts";
import { part2 } from "./part2.ts";

export async function day01(part: string) {
  const input = await Deno.readFile("./01/input");
  switch (part) {
    case "1":
      return part1(input);
    case "2":
      return part2(input);
  }
}
