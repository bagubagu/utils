import { isPhone } from "../";

test("not valid", () => {
  expect(isPhone("081888")).toBeFalsy();
});

test("not valid", () => {
  expect(isPhone("asdf")).toBeFalsy();
});

test("not valid", () => {
  expect(isPhone("+08118302699")).toBeFalsy();
});

test("not valid", () => {
  expect(isPhone("+6208118302699")).toBeTruthy();
});

test("is valid", () => {
  expect(isPhone("08118302699")).toBeTruthy();
});

test("is valid", () => {
  expect(isPhone("+628118302699")).toBeTruthy();
});
