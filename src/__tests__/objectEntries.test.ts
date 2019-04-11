import { objectEntries } from "../";

test("Return correct objectEntries", () => {
  const weapons = {
    thor: "mjolnir",
    spiderman: "web",
    wonderwoman: "rope",
    hulk: "rage"
  };

  for (const [key, value] of objectEntries(weapons)) {
    if (key === "hulk") {
      expect(value).toBe("rage");
    }
  }
});
