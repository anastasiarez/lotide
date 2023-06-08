const tail = require('../tail');

console.log('Tail is: ' + tail(["Hello", "Lighthouse", "Labs"]));
const result = tail(["Hello", "Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
