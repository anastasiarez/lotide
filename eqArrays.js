//Task: create a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function (array1, array2){
  if (JSON.stringify(array1) === JSON.stringify(array2)){ 

    //To check if two arrays have the same values, we can use the JSON.stringify() method to convert the arrays to strings and then compare the strings.
    
    return true;
  } else {
    return false;
  }
}

module.exports = eqArrays;