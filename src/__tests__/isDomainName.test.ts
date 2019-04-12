import { isDomainName } from "../";

test("valids", () => {
  expect(isDomainName("avenger.com")).toBeTruthy();
});

test("not valids", () => {
  expect(isDomainName("gmailcom")).toBeFalsy();
  expect(isDomainName("thor.123")).toBeFalsy();
});
