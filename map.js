/**

Our map function will take in two arguments:
* An array to map
* A callback function

The map function will return a new array based on the results of the callback function.*/


const words = ["ground", "control", "to", "major", "Sergio"];

const map = function(array, callback) {
  let results = []; //to store the results of applying the callback function to each item in the array.

  for (let item of array) {
    results.push(callback(item)); // --> (words, word => word[0]); 
    
    //The words array is passed as the array argument. The arrow function word => word[0] is passed as the callback argument.  The arrow function takes each word and returns its first character (word[0]).
  }
  return results;
};

const results1 = map(words, word => word[0]); // --> word => word[0] is a cb f-n
console.log(results1);
