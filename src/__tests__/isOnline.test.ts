import { isOnline } from "../";

// skip this test by default
// make this test fail by turning off the internet connectivity
test.skip("valids", async () => {
  expect.assertions(1);
  expect(await isOnline({ timeout: 2000 })).toBeFalsy();
});
