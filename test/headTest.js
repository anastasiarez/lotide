
const assertEqual = require('../assertEqual');
const head = require('../head');

console.log("head array is: " + head([1]));

console.log(assertEqual(head([5, 'hello', 13]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));