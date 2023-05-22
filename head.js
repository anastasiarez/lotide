const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// console.log(assertEqual("LHL", "LHL"));
// console.log(assertEqual(1, 2));

let head = function (array) {
  return array[0];
};

//console.log('head:' + array[0]);

console.log("head is: " + head([]));

assertEqual(head([5, 'hello', 13]), 1);

//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
