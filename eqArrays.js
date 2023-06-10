//Task: create a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
//To check if two arrays have the same values, we can use the JSON.stringify() method to convert the arrays to strings and then compare the strings.

const eqArrays = function (array1, array2){
  if (JSON.stringify(array1) === JSON.stringify(array2)){ 
    return true;
  } else {
    return false;
  }
}

module.exports = eqArrays;

