import { toE164 } from "../";

test("not valid", () => {
  expect(toE164("081888")).toBe("+62081888");
});

test("not valid", () => {
  expect(toE164("asdf")).toBe("asdf");
});

test("not valid", () => {
  expect(toE164("+08118302699")).toBe("+08118302699");
});

test("not valid", () => {
  expect(toE164("+6208118302699")).toBe("+628118302699");
});

test("is valid", () => {
  expect(toE164("08118302699")).toBe("+628118302699");
});

test("is valid", () => {
  expect(toE164("+628118302699")).toBe("+628118302699");
});
