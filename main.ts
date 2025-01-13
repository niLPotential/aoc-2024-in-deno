import { day01 } from "@day/01";
import { day02 } from "@day/02";

const day = Deno.args[0];
const part = Deno.args[1];

console.log(await answer(day, part));

async function answer(day: string, part: string) {
  switch (day) {
    case "01":
      return await day01(part);
    case "02":
      return await day02(part);
  }
}
