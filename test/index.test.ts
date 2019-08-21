import { sum } from "../src/index";

test("basic", () => {
  expect(sum()).toBe(0); // if there are no arguments.
});

test("basic again", () => {
  expect(sum(1, 2)).toBe(3); // if there are arguments.
});
