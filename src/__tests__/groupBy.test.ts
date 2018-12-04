import { groupBy } from "../";

test("Group array by key", () => {
  const heroes = [
    { name: "Spiderman", age: 15 },
    { name: "Thor", age: 35 },
    { name: "Loki", age: 35 },
    { name: "Hulk", age: 32 }
  ];

  const oldHeroes = groupBy(heroes, e => (e.age > 30 ? "old" : "young"));
  const sameAge = groupBy(heroes, "age");

  expect(oldHeroes["old"].length).toEqual(3);
  expect(oldHeroes["young"].length).toEqual(1);

  expect(sameAge["35"].length).toEqual(2);
});
