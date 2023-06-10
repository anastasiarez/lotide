//Task: Implement without function which will return a subset of a given array, removing unwanted elements. 
//Function should be returning a new array and not modify the original array that is passed in.
//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.


const assertArraysEqual = require('./assertArraysEqual');

const without = function (sourse, itemsToRemove) {
  function search (item) {
    return !itemsToRemove.includes(item);

    //The search function checks if the item is not included (!) in the itemsToRemove array using the includes method. It returns true if the item is not found (i.e., it should be kept), and false if the item is found (i.e., it should be removed).
  }
  return sourse.filter(search) 

    //The without function uses the filter method on the source array. The filter method creates a new array containing only the elements for which the callback function (in this case, search) returns true.
}


without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "without russians"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "without russians"]);



