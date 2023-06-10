/**
 * Function takes in two objects and console.log an appropriate message to the console.
 * sample of an output: 
 * 🔴 Assertion Failed: {fruit:'cherry', colour: 'red'} !== {fruit:'orange', colour: 'yellow'}
 */


// 1) THIS F-N COMPARES PRIMITIVE DATA AS VALUES

const assertEqual = require('./assertEqual');



// 2) THIS F-N COMPARES ARRAYS AS VALUES

const eqArrays = require('./eqArrays');



// 3) THIS F-N COMPARES OBJECTS WITH ARRAYS IN IT

const eqObjects = require('./eqObjects');



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

const obj_1 = { fruit: 'cherry', colour: 'red' };
const obj_2 = { fruit: 'cherry', colour: 'red' };


assertObjectsEqual(obj_1, obj_2);


module.exports = assertObjectsEqual;
