const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("takes in two arrays, returns true or false, based on a perfect match", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, '5'];
    assert.deepEqual(eqArrays(inputArray, expectedOutput), false);
  });
});
