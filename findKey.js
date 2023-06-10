/**
 * Implement the function findKey which takes in an object and a callback. 
 * It should scan the object and return the first key for which the callback returns a truthy value. 
 * If no key is found, then it should return undefined.
 */

const assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  const keys = Object.keys(object);

  for (const item of keys) {
    if (callback(object[item])) { //invoke the callback function with the value of object[item] and compare the result with true.
      return item;
    }
  } 
  return undefined;
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "findKey":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "findKey"); 

//In this code, the assertEqual function is called with the result of findKey as the actual parameter and the expected value "noma" as the expected parameter. 

module.exports = findKey;