
const assert = require('assert');

const assertEqual = function(actual, expected) {
  try {
    assert.deepEqual(actual, expected);
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } catch (error) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;