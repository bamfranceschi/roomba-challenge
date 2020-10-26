const dirtFinder = require("./dirtFinder");

const location = [1, 2];

const dirtLocations = [
  [1, 2],
  [3, 5],
  [5, 5],
  [7, 9],
];

test("returns true or false if a dirt pile is at a given location", () => {
  expect(dirtFinder(location, dirtLocations)).toBe(true);
});
