const newLocation = require("./newLocation");

const location = [1, 1];

const instruction = "N";

test("calculates new location for roomba", () => {
  expect(newLocation(location, instruction)).toEqual([1, 2]);
});
