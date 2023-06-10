/**
 * takeUntil f-n will take in two parameters:

The array to work with
The callback
The function will return a "slice of the array with elements taken from the beginning. It should keep going until the callback returns a truthy value.
The callback should only be provided one value: The item in the array.
 */

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function (array, callback) {
  let newArray = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    } 
    newArray.push(item);    
    }
  return newArray;
};


//INPUT

const data = [1, 1, 1, 7, 2, -1, 2, 4, 5];
const results = takeUntil(data, x => x < 0);

assertArraysEqual(results, [1, 1, 1, 7, 2]);


module.exports = takeUntil;
