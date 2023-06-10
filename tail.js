//Task: write every element except the head (first element) of the array.

const assertEqual = require('./assertEqual');

let tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

assertEqual(tail([1,2,3,'tail']), [2,3,'tail'])

module.exports = tail;


//slice returns a new array containing a portion of the original array. In this case, array.slice(1) returns a new array that starts from the second element of the array parameter.

