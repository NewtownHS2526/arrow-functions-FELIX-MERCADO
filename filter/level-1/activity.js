// ============================================
// FILTER FUNCTION - LEVEL 1
// ============================================

/*
WHAT IS AN ARRAY?
================
An array is a special variable that can hold multiple values at once. 
Think of it like a list or a collection of items. Arrays are ordered, 
meaning each item has a position (called an index) starting from 0.

Example:
const numbers = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie"];
const mixed = [1, "hello", true, 42];
*/

/*
WHAT IS THE filter() FUNCTION?
===============================
The filter() function is used to CREATE A NEW ARRAY with only the elements 
that pass a test (condition). It filters out elements that don't meet the 
criteria, keeping only the ones that do.

Key Points:
- Tests each element against a condition
- Returns a NEW array (doesn't change the original)
- Only includes elements where the condition is true
- The new array can be shorter than the original
- Original array stays unchanged
*/

/*
SYNTAX EXAMPLES
===============
*/

// One-Line Arrow Function
// const newArray = array.filter(element => condition);

// Regular Arrow Function Style
// const newArray = array.filter((element) => {
//   return condition;
// });

// Classic Function Style (for comparison)
// const newArray = array.filter(function(element) {
//   return condition;
// });

/*
EXAMPLE 1: Filtering Even Numbers
*/
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

// One-line arrow function
const evens1 = numbers1.filter(n => n % 2 === 0);
console.log("Example 1 - One-line:", evens1); // [2, 4, 6, 8]

// Regular arrow function
const evens2 = numbers1.filter((n) => {
  return n % 2 === 0;
});
console.log("Example 1 - Regular:", evens2); // [2, 4, 6, 8]

/*
EXAMPLE 2: Filtering Long Strings
*/
const words = ["cat", "dog", "elephant", "bird", "mouse"];

// One-line arrow function
const longWords1 = words.filter(word => word.length > 3);
console.log("Example 2 - One-line:", longWords1); // ["elephant", "bird", "mouse"]

// Regular arrow function
const longWords2 = words.filter((word) => {
  return word.length > 3;
});
console.log("Example 2 - Regular:", longWords2); // ["elephant", "bird", "mouse"]

/*
EXAMPLE 3: Filtering Numbers Greater Than a Value
*/
const numbers2 = [10, 25, 5, 30, 15, 40];

// One-line arrow function
const bigNumbers1 = numbers2.filter(n => n > 20);
console.log("Example 3 - One-line:", bigNumbers1); // [25, 30, 40]

// Regular arrow function
const bigNumbers2 = numbers2.filter((n) => {
  return n > 20;
});
console.log("Example 3 - Regular:", bigNumbers2); // [25, 30, 40]

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use filter() to create 
a new array with only the odd numbers.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your solution here (one-line arrow function):
const exercise1Result1 = exercise1Array.filter(n => n % 2 === 0);

// Your solution here (regular arrow function):
const exercise1Result2 = exercise1Array.filter(n => n % 2 === 0);

// Uncomment to test:
console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: [1, 3, 5, 7, 9]

/*
EXERCISE 2
----------
Given the array ["apple", "banana", "kiwi", "orange", "grape"], use filter() 
to create a new array with only the fruits that have 5 or more letters.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = ["apple", "banana", "kiwi", "orange", "grape"];

// Your solution here (one-line arrow function):
const exercise2Result1 = exercise2Array.filter(n => n > 5);

// Your solution here (regular arrow function):
const exercise2Result2 = exercise2Array.filter(n => n > 5);

// Uncomment to test:
console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: ["apple", "banana", "orange", "grape"]

/*
EXERCISE 3
----------
Given the array [15, 8, 22, 5, 30, 12, 18], use filter() to create a new 
array with only the numbers that are greater than 10.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [15, 8, 22, 5, 30, 12, 18];

// Your solution here (one-line arrow function):
const exercise3Result1 = exercise3Array.filter(n => n > 10);

// Your solution here (regular arrow function):
const exercise3Result2 = exercise3Array.filter(n => n > 10);

// Uncomment to test:
console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: [15, 22, 30, 12, 18]

/*
EXERCISE 4
----------
Given the array ["red", "blue", "green", "yellow", "purple"], use filter() 
to create a new array with only the colors that start with the letter "b".

Hint: Use the startsWith() method or check the first character.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = ["red", "blue", "green", "yellow", "purple"];

// Your solution here (one-line arrow function):
const exercise4Result1 = exercise4Array

// Your solution here (regular arrow function):
const exercise4Result2 = exercise4Array.filter();

// Uncomment to test:
console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: ["blue"]

/*
EXERCISE 5
----------
Given the array [2, 4, 6, 8, 10, 11, 12, 13, 14], use filter() to create 
a new array with only the numbers that are divisible by 4.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [2, 4, 6, 8, 10, 11, 12, 13, 14];

// Your solution here (one-line arrow function):
const exercise5Result1 = exercise5Array => exercise5Array.filter(n => n % 4 === 0);

// Your solution here (regular arrow function):
const exercise5Result2 = exercise5Array.filter((n) => {
    return n % 4 === 0;
});

// Uncomment to test:
console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
// Expected: [4, 8, 12]

