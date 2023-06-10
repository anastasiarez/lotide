//Task: create function middle which will take in an array and return the middle-most element(s) of the given array.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// MIDDLE FUNCTION

const assertEqual = require('./assertEqual');

function middle(array) {
  const length = array.length;
  if (length === 0 || length === 1) {
    return [];
  }

  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
}

assertEqual(middle([1, 2, 'middle', 4, 5]), ['middle']);

module.exports = middle;