const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("checks if arrays have the same values", () => {
    assert.strictEqual(assertArraysEqual([1, 1, 1], [1, 1, 1]))
  });
});
