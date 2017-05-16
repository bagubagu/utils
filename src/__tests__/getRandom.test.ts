import { getRandom } from "../";

test("get Random number between 1 and 10", () => {
    expect(getRandom(1, 10)).toBeLessThan(10);
    expect(getRandom(1, 10)).toBeGreaterThanOrEqual(1);
});
