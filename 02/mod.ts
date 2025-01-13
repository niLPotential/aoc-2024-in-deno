import { part1 } from "./part1.ts";

export async function day02(part: string) {
  const input = await Deno.readFile("./02/input");
  switch (part) {
    case "1":
      return part1(input);
  }
}
