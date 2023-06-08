const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("checks for actual vs expected values", () => {
    const input = "LHL";
    const output = "LHL";
    assertEqual(input, output);
  });
});
