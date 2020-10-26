const validInstruction = require("./validInstruction");

const ticker = 3;

const instructions = [
  "N",
  "E",
  "E",
  "N",
  "N",
  "N",
  "E",
  "E",
  "S",
  "W",
  "S",
  "S",
  "S",
  "S",
  "S",
];

test("returns a valid instruction for Roomba", () => {
  expect(validInstruction(ticker, instructions)).toEqual("N");
});
