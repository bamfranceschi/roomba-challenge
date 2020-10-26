const validMove = require("./validMove");

const location = [1, 2];

const dimensions = [10, 10];

test("calculates whether the Roomba can move in that direction", () => {
  expect(validMove(location, dimensions)).toBe(true);
});
