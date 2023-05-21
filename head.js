const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

         //it's a regular string with additional functionality for embedding expressions. By using ${expression}, you can insert the value of any JavaScript expression or variable into the string. The expression inside ${} is evaluated and its value is inserted into the resulting string. Template literals provide a convenient way to create strings with dynamic content without having to concatenate multiple strings or use complex string manipulation.

// console.log(assertEqual("LHL", "LHL"));
// console.log(assertEqual(1, 2));

let head = function(array) {
  return array[0];
};

//console.log('head:' + array[0]);
console.log("head is: " + head([]));

assertEqual(head([5, 'hello', 13]), 1);

//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
