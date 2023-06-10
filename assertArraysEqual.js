//Task: Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
//Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

//To check if two arrays have the same values, we can use the JSON.stringify() method to convert the arrays to strings and then compare the strings.


const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {

    console.log(`💚 Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);

  } else {
    console.log(`🔴 Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
  }
};


module.exports = assertArraysEqual;

