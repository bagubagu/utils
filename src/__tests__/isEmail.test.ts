import { isEmail } from "../";

test("not valid", () => {
  expect(isEmail("louis.larrygmail.com")).toBeFalsy();
});

test("is valid", () => {
  expect(isEmail("louis@gmail.com")).toBeTruthy();
});

test("tldBlacklist", () => {
  expect(isEmail("louis@gmail.earth", { tldBlacklist: ["earth"] })).toBeFalsy();
  expect(isEmail("louis@gmail.com", { tldBlacklist: { com: true } })).toBeFalsy();
  expect(isEmail("louis@gmail.id", { tldBlacklist: ["com"] })).toBeTruthy();
  expect(isEmail("louis@gmail.id", { tldBlacklist: { com: true } })).toBeTruthy();
});

test("tldWhitelist tld", () => {
  expect(isEmail("louis@gmail.com", { tldWhitelist: ["com"] })).toBeTruthy();
  expect(isEmail("louis@gmail.com", { tldWhitelist: { com: true } })).toBeTruthy();
  expect(isEmail("louis@gmail.id", { tldWhitelist: ["com"] })).toBeFalsy();
  expect(isEmail("louis@gmail.id", { tldWhitelist: { com: true } })).toBeFalsy();
});
