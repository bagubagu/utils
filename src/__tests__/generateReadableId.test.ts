import { generateReadableId } from "../";
import { adjectives, nouns } from "../generateReadableId";

// verb = kata kerja
// adjective = kata sifat
// noun = kata benda
// id: noun-adjective-number
// en: adjective-noun-language

test("in English", () => {
  const [, adj, noun, num] = generateReadableId().match(/(\w+)-(\w+)-(\d+)/);
  expect(adjectives.en).toContain(adj);
  expect(nouns.en).toContain(noun);
  expect(parseInt(num)).toBeLessThan(100);
  expect(parseInt(num)).toBeGreaterThan(0);
});

test("in Indonesian", () => {
  const [, noun, adj, num] = generateReadableId({ language: "id" }).match(/(\w+)-(\w+)-(\d+)/);
  expect(adjectives.id).toContain(adj);
  expect(nouns.id).toContain(noun);
  expect(parseInt(num)).toBeLessThan(100);
  expect(parseInt(num)).toBeGreaterThan(0);
});
