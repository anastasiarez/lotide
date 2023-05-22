//Task: Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
//Answer: Use the Array. isArray() Method to check whether an object (or a variable) is an array or not. This method returns true if the value is an array; otherwise returns false .

function flatten(array) {
  const result = [];
  for (const item of array) { //forof loop
    const isArray = Array.isArray(item); 
    
    // loop checks if items in our array are nested arrays

    if (isArray) {
      result.push(...item) 
      
      // ... spread operator works with arrays and flattens the array.

    } else {
      result.push(item)
    }
  }
  return result;
}

console.log(flatten(['a', 3, ['a', 'b', 3]]));
