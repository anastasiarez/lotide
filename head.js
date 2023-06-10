//Task: return first element of the array

const assertEqual = require('./assertEqual');

let head = function(array) {
  if (array.length === 0) {
    return null;
  }
  return array[0];
};

assertEqual(head(['head', 'b']),'head')
module.exports = head;

