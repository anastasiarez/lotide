/**
 * function findKeyByValue takes in an object and a value. 
 * It should scan the object and return the first key which contains the given value. 
 * If no key with that given value is found, then it should return undefined.
 */



const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
}

//SECOND OPTION --> GPT Chat Help

const findKeyByValue_2 = (bestTVShowsByGenre, movieName) => {
  const genres = Object.keys(bestTVShowsByGenre);
  for (const item of genres) {
    if (bestTVShowsByGenre[item] === movieName) {
      return item;
    }
  }
}

console.log((findKeyByValue(bestTVShowsByGenre, "The Wire")));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);