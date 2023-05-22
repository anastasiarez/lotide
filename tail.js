//Task: write every element except the head (first element) of the array.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function (array) {
  if (array.length <= 1) {
    return [];

    //in case our array contains only one element still give an output of an empty array
  }
  return array.slice(1);

  //slice returns a new array containing a portion of the original array. In this case, array.slice(1) returns a new array that starts from the second element of the array parameter.

};

console.log('Tail is: ' + tail(["Hello", "Lighthouse", "Labs"]));
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!