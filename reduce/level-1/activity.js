// ============================================
// REDUCE FUNCTION - LEVEL 1
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
WHAT IS THE reduce() FUNCTION?
===============================
The reduce() function is used to REDUCE an array to a single value by 
applying a function to each element and accumulating the result. It's 
like combining all elements into one value.

Key Points:
- Reduces an array to a single value
- Takes an accumulator (starting value) and current element
- Returns a single value (number, string, object, etc.)
- Very flexible - can be used for summing, finding max, concatenating, etc.
- Original array stays unchanged
*/

/*
SYNTAX EXAMPLES
===============
*/

// One-Line Arrow Function
// const result = array.reduce((accumulator, element) => accumulator + element, initialValue);

// Regular Arrow Function Style
// const result = array.reduce((accumulator, element) => {
//   return accumulator + element;
// }, initialValue);

// Classic Function Style (for comparison)
// const result = array.reduce(function(accumulator, element) {
//   return accumulator + element;
// }, initialValue);

/*
EXAMPLE 1: Summing Numbers
*/
const numbers1 = [1, 2, 3, 4, 5];

// One-line arrow function
const sum1 = numbers1.reduce((acc, n) => acc + n, 0);
console.log("Example 1 - One-line:", sum1); // 15

// Regular arrow function
const sum2 = numbers1.reduce((acc, n) => {
  return acc + n;
}, 0);
console.log("Example 1 - Regular:", sum2); // 15

/*
EXAMPLE 2: Finding Maximum Number
*/
const numbers2 = [10, 25, 5, 30, 15];

// One-line arrow function
const max1 = numbers2.reduce((acc, n) => n > acc ? n : acc, numbers2[0]);
console.log("Example 2 - One-line:", max1); // 30

// Regular arrow function
const max2 = numbers2.reduce((acc, n) => {
  return n > acc ? n : acc;
}, numbers2[0]);
console.log("Example 2 - Regular:", max2); // 30

/*
EXAMPLE 3: Concatenating Strings
*/
const words = ["Hello", "World", "JavaScript"];

// One-line arrow function
const sentence1 = words.reduce((acc, word) => acc + " " + word, "");
console.log("Example 3 - One-line:", sentence1.trim()); // "Hello World JavaScript"

// Regular arrow function
const sentence2 = words.reduce((acc, word) => {
  return acc + " " + word;
}, "");
console.log("Example 3 - Regular:", sentence2.trim()); // "Hello World JavaScript"

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array [1, 2, 3, 4, 5], use reduce() to calculate the sum of 
all numbers.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [1, 2, 3, 4, 5];

// Your solution here (one-line arrow function):
const exercise1Result1 = exercise1Array.reduce((total, n) => total + n, 0)

// Your solution here (regular arrow function):
const exercise1Result2 = exercise1Array.reduce((total, n) => {
  return total + n
}, 0)

// Uncomment to test:
console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: 15

/*
EXERCISE 2
----------
Given the array [10, 20, 30, 40], use reduce() to calculate the product 
(multiplication) of all numbers.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [10, 20, 30, 40];

// Your solution here (one-line arrow function):
const exercise2Result1 = exercise2Array.reduce((total, n) => total * n, exercise2Array[1])

// Your solution here (regular arrow function):
const exercise2Result2 = exercise2Array.reduce((total, n) => {
  return total * n;
}, exercise2Array[1])

// Uncomment to test:
console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: 240000

/*
EXERCISE 3
----------
Given the array ["apple", "banana", "orange"], use reduce() to concatenate 
all strings into one string separated by commas: "apple,banana,orange".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = ["apple", "banana", "orange"];

// Your solution here (one-line arrow function):
const exercise3Result1 = exercise3Array.reduce((total, n) => total + n + ",", 0)

// Your solution here (regular arrow function):
const exercise3Result2 = exercise3Array.reduce((total, n) => {
  return total + n + ","
}, 0)

// Uncomment to test:
console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: "apple,banana,orange"

/*
EXERCISE 4
----------
Given the array [5, 15, 25, 35], use reduce() to find the maximum number.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [5, 15, 25, 35];

// Your solution here (one-line arrow function):
const exercise4Result1 = exercise4Array((total, n) => total < n ? n : total, 0)

// Your solution here (regular arrow function):
const exercise4Result2 = exercise4Array((total, n) => {
    return total < n ? n : total, 1;
}, 0)

// Uncomment to test:
console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: 35

/*
EXERCISE 5
----------
Given the array [2, 4, 6, 8], use reduce() to calculate the sum of all 
numbers, starting with an initial value of 10.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [2, 4, 6, 8];

// Your solution here (one-line arrow function):
const exercise5Result1 = exercise5Array.reduce((total, n) => total + n, 10)

// Your solution here (regular arrow function):
const exercise5Result2 = exercise5Array.reduce((total, n) => {
  return total + n, 0;
}, 10)

// Uncomment to test:
console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
// Expected: 30 (10 + 2 + 4 + 6 + 8)

