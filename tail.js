//Task: write every element except the head (first element) of the array.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function(array) {
  if (array.length <= 1) {
    return [];

    //in case our array contains only one element still give an output of an empty array
  }
  return array.slice(1);

};
//slice returns a new array containing a portion of the original array. In this case, array.slice(1) returns a new array that starts from the second element of the array parameter.


module.exports = tail;


