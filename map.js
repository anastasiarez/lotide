/**

Our map function will take in two arguments:
* An array to map
* A callback function

The map function will return a new array based on the results of the callback function.*/

const assertEqual = require('./assertEqual');


const words = ["ground", "control", "to", "major", "Sergio"];

const map = function(array, callback) { // array is words
  let newArray = [];

  //to store the results of applying the callback function to each item in the new array.

  for (let item of array) {
    newArray.push(callback(item)); // --> (words, word => word[0]); 

    //The words array is passed as the array argument. The arrow function word => word[0] is passed as the callback argument.  The arrow function takes each word and returns its first character (word[0]).
  }
  return newArray;
};

const results = map(words, word => word[0]); // --> word => word[0] is a cb f-n

assertEqual(results.join(','), 'g,c,t,m,S');



// This converts the results array to a string by joining its elements with commas and then compares it with the expected string.

module.exports = map;
