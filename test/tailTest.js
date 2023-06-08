const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns every element except the head (first element) of the array", () => {
    const inputArray = ["Yo Yo", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });
});
