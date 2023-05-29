/**
 * Function takes in two objects and console.log an appropriate message to the console.
 * sample of an output: 
 * 🔴 Assertion Failed: {fruit:'cherry', colour: 'red'} !== {fruit:'orange', colour: 'yellow'}
 */


// 1) THIS F-N COMPARES PRIMITIVE DATA AS VALUES

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// 2) THIS F-N COMPARES ARRAYS AS VALUES

const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
}

// 3) THIS F-N COMPARES OBJECTS WITH ARRAYS IN IT

const eqObjects = function (object1, object2) {
  const arrayKeys1 = Object.keys(object1);
  const arrayKeys2 = Object.keys(object2);

  if (arrayKeys1.length !== arrayKeys2.length) {
    return false;
  }

  for (let key of arrayKeys1) {
    const value1 = object1[key]; // --> an array
    const value2 = object2[key] // --> "medium"

    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }

    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

// 4) THIS F-N COMPARES WHOLE OBJECTS AS VALUES 

const assertObjectsEqual = (obj_1, obj_2) => {

  const inspect = require('util').inspect;

  // inspect is used to display the object in a formatted way using the util.inspect function.
  // from this [object Object] !== [object Object] to this 
  // { fruit: 'cherry', colour: 'red' } !== { fruit: 'orange', colour: 'yellow' }

  const obj_1String = JSON.stringify(obj_1);
  const obj_2String = JSON.stringify(obj_2);

  // JSON.stringify works with arrays and objects. 
  // Output: {"fruit":"cherry","colour":"red"}

  if (obj_1String === obj_2String) {

    console.log(`💚 Assertion Passed: ${inspect(obj_1)} === ${inspect(obj_2)}`);
    
  } else {

    console.log(`🔴 Assertion Failed: ${inspect(obj_1)} !== ${inspect(obj_2)}`);
  }
};

const obj_1 = { fruit: 'cherry', colour: 'red'};
const obj_2 = { fruit: 'orange', colour: 'yellow'};
  
assertObjectsEqual(obj_1, obj_2);

