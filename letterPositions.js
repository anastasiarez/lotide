const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {

    console.log(`💚 Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);

  } else {
    console.log(`🔴 Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
  }
};


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
}

console.log(letterPositions("lighthouse in the house"));



const letterPositions_2 = (sentence) => {
  const results = {};
  const indexArray = [];
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
}

console.log(letterPositions_2("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);