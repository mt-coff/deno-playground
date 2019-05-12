import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { sum, difference } from "./calc.ts";

test(function sumTest() {
  assertEquals(sum(1, 3), 4);
});

test(function differenceTest() {
  assertEquals(difference(10, 3), 7);
});

runTests();
