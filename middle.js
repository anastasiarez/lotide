//Task: create function middle which will take in an array and return the middle-most element(s) of the given array.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// MIDDLE FUNCTION

function middle(array) {
  const shortArray = array.length === 1 || array.length === 2;
  if (shortArray) {
    return [];
  }

  const middleIndex = array.length / 2;

  if (Number.isInteger(middleIndex)) {
    const firstElem = array[middleIndex - 1];

    //seecond index is number 3. We need to return 2 & 3. So we -1 index to get 2

    const secondElem = array[middleIndex]
    return [firstElem, secondElem]
  }

  const roundedIndex = Math.floor(middleIndex) // 5/2 = 2.5 Math.floor --> 3
  const singleElem = array[roundedIndex]
  return [singleElem]
}

module.exports = middle;