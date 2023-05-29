const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const results = {};
  for (const letter of sentence) {
    if (letter !== ' ') {

      //if letter is not an empty space then check if the letter key already exists in the results object. If it does, the count is incremented by 1.

      if (results[letter]) {
        results[letter] += 1;

      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
}


console.log(countLetters("lighthouse in the house"));


assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["i"], 2);
assertEqual(countLetters("lighthouse in the house")["g"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4)