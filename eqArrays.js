//Task: create a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2){
  if (JSON.stringify(array1) === JSON.stringify(array2)){ 

    //To check if two arrays have the same values, we can use the JSON.stringify() method to convert the arrays to strings and then compare the strings.
    
    return true;
  } else {
    return false;
  }
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

console.log(eqArrays([1], [1]))
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));