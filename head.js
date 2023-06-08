//Task: return first element of the array

let head = function(array) {
  if (array.length === 0) {
    return null;
  }
  return array[0];
};

module.exports = head;

