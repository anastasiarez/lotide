//function takes a sentence as input and counts the occurrences of each letter in the sentence

const assertEqual = require('./assertEqual');

const countLetters = (sentence) => {
  const results = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

//if letter is not an empty space then check if the letter key already exists in the results object. If it does, the count is incremented by 1.

assertEqual(countLetters("lighthouse in the house")["l"], 1);

module.exports = countLetters;