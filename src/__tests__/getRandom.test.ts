import { getRandom } from "../";

test("get Random number between 1 and 3", () => {
  expect(getRandom(1, 3)).toBeLessThanOrEqual(3);
  expect(getRandom(1, 3)).toBeGreaterThanOrEqual(1);
});
