/**

Our map function will take in two arguments:
* An array to map
* A callback function

The map function will return a new array based on the results of the callback function.*/

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {

    console.log(`💚 Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);

  } else {
    console.log(`🔴 Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
  }
};



const words = ["ground", "control", "to", "major", "Sergio"];

const map = function (array, callback) { // array is words
  let newArray = [];

  //to store the results of applying the callback function to each item in the new array.

  for (let item of array) {
    newArray.push(callback(item)); // --> (words, word => word[0]); 

    //The words array is passed as the array argument. The arrow function word => word[0] is passed as the callback argument.  The arrow function takes each word and returns its first character (word[0]).
  }
  return newArray;
};

const results = map(words, word => word[0]); // --> word => word[0] is a cb f-n

console.log(results);


console.log(assertEqual(results.join(','), 'g,c,t,m,S'));

// This converts the results array to a string by joining its elements with commas and then compares it with the expected string.

console.log(eqArrays(results, ['g', 'c', 't', 'm', 'S']));

console.log(assertArraysEqual(results, [ 'g', 'c', 't', 'm', 'S' ]));