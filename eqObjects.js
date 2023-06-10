
/**
 * Returns true if both objects have identical keys with identical values
 * Otherwise false
 * Two objects are equal when:
 * They have the same number of keys
 * The value for each key in one object is the same as the value for that same key in the other object
 */

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const arrayKeys1 = Object.keys(object1);
  const arrayKeys2 = Object.keys(object2);

  // get keys from objects and makes an array --> ['colours', 'size']

  if (arrayKeys1.length !== arrayKeys2.length) {
    return false;
  }

  for (let key of arrayKeys1) {
    const value1 = object1[key]; // --> an array
    const value2 = object2[key]; // --> "medium"

    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }

      // It should return false immediately when a property value mismatch is found (clasing bracket after false;}). Otherwise, it will continue the loop even after finding a mismatch, which will lead to incorrect results.

    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

const multiColorShirtObject =
{
  colors: ["red", "blue"],
  size: "medium"
};

const anotherMultiColorShirtObject =
{
  size: "medium",
  colors: ["red", "blue"]
};

const longSleeveMultiColorShirtObject =
{
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};


assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
assertEqual(eqObjects(anotherMultiColorShirtObject, longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;