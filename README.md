# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anastasiia.ua/lotide`

**Require it:**

`const _ = require('@anastasiia.ua/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns first element of the array
* `function2(tail)`: returns every element except the head (first element) of the array
* `function3(middle)`: takes in an array and returns the middle-most element(s) of the given array
* `function4(countLetters)`: takes a sentence as input and counts the occurrences of each letter in the sentence
* `function5(countOnly)`: The function reports back how many instances of each string were found in the array of strings
* `function6(findKey)`: takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined
* `function7(findKeyByValue)`:  takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined
* `function8(flatten)`: takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array
* `function9(letterPositions)`: For each letter in the string, returns an array of multiple numbers to represent all the places in the string that letter shows up.
* `function10(map)`: takes in two arguments: an array to map and a callback function. The map function returns a new array based on the results of the callback function
* `function11(takeUntil)`: takes in two parameters: the array to work wit and a callback. The function returns a "slice of the array with elements taken from the beginning. It will keep going until the callback returns a truthy value. The callback should only be provided one value: The item in the array.
* `function12(without)`: returns a subset of a given array, removing unwanted elements 
* `function13(assertArraysEqual)`: takes in two arrays and console.log an appropriate message to the console
* `function14(assertEqual)`: its used for asserting equality between two values. It compares the actual value with the expected value
* `function15(eqArrays)`: takes in two arrays and returns true or false, based on a perfect match
* `function16(assertObjectsEqual)`: compares whole objects as values
 *`function16(eqObjects)`: returns true if both objects have identical keys with identical values

