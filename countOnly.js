const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allNamesArray: an array of strings that we need to look through
// namesToCount: an object specifying what to count
//The function should report back how many instances of each string were found in the allNamesArray  of strings.


const countOnlyVIP = (allNamesArray, namesToCount) => {
  const results = {};
  for (const name of allNamesArray) {
    if (namesToCount[name]) { 
      
      //For each name, it checks if it exists as a key in the namesToCount object using the expression namesToCount[name]. If the name exists and has a truthy value, the count is incremented.

      if (results[name]) { 
        
        //If the name exists in the results object, its count is incremented by 1 using results[name] += 1. 

        results[name] += 1;

      } else {
        results[name] = 1;
        
        //If the name doesn't exist in the results object, it is added with an initial count of 1.
      }
    }
  }
  return results;
};

const firstNames = [ //allNamesArray
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnlyVIP (firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  //-->allNamesArray
  // --> namesToCount

console.log(result1);

//The code then calls the countOnlyVIP function with the firstNames array and an object specifying the names to count. The resulting counts are stored in result1.


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined)