import { removeEmptyValues } from "../";

test("Remove empty values", () => {
  const weapons = {
    thor: "mjolnir",
    spiderman: "",
    wonderwoman: null,
    hulk: undefined
  };

  const result = removeEmptyValues(weapons);

  expect(result).toMatchObject({
    thor: "mjolnir"
  });
});
