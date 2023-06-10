/**
 * function findKeyByValue takes in an object and a value. 
 * It should scan the object and return the first key which contains the given value. 
 * If no key with that given value is found, then it should return undefined.
 */

const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = (bestTVShowsByGenre, movieName) => {
  for (const genre in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[genre] === movieName) {
      return genre;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

module.exports = findKeyByValue;