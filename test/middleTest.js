const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns middle element/s of the array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert.deepEqual(middle(inputArray), expectedOutput);
  });
});
