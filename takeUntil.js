/**
 * takeUntil f-n will take in two parameters:

The array to work with
The callback
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.
The callback should only be provided one value: The item in the array.
 */
const assertArraysEqual = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {

    console.log(`💚 Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);
    
  } else {
    console.log(`🔴 Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
  }
};



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

const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results = takeUntil(data, x => x < 0);
console.log(results);

console.log('---');

const data_2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results_2 = takeUntil(data_2, x => x === ',');
console.log(results_2);

console.log('---');

console.log(assertArraysEqual(results, [1, 1, 1]));
