const assertArraysEqual = require('./assertArraysEqual');

//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.



const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    //The loop variable i represents the current index.

    const letter = sentence[i];

    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);

        // If the letter key exists in results, it pushes the current index i to the corresponding array in results[letter]. This keeps track of all the indices where the letter appears in the sentence.

      } else {
        results[letter] = [i];

        //If the letter key does not exist in results, it initializes it as an empty array (results[letter] = []) and then pushes the current index i into it.

      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);



const letterPositions_2 = (sentence) => {
  const results = [];
  let index = 0;

  for (const letter of sentence) {
    const isArray = Array.isArray(results[letter]);
    if (letter !== ' ') {
      if (isArray && results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    } index++;
  }
  return results;
};

assertArraysEqual(letterPositions_2("hello").e, [1]);

module.exports = letterPositions;
