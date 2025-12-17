// ============================================
// FOREACH FUNCTION - LEVEL 1
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
WHAT IS THE forEach() FUNCTION?
================================
The forEach() function is used to EXECUTE A FUNCTION for each element 
in an array. Unlike map(), it doesn't return a new array - it's used 
for performing actions or side effects (like printing, updating variables, etc.).

Key Points:
- Executes a function for each element
- Does NOT return a new array (returns undefined)
- Used for side effects (console.log, updating variables, etc.)
- Original array stays unchanged
- Cannot use break or continue (use regular for loop if needed)
*/

/*
SYNTAX EXAMPLES
===============
*/

// One-Line Arrow Function
// array.forEach(element => { /* do something */ });

// Regular Arrow Function Style
// array.forEach((element) => {
//   /* do something */
// });

// Classic Function Style (for comparison)
// array.forEach(function(element) {
//   /* do something */
// });

/*
EXAMPLE 1: Printing Each Element
*/
const numbers1 = [1, 2, 3, 4, 5];

// One-line arrow function
console.log("Example 1 - One-line:");
numbers1.forEach(n => console.log(n));
// Output: 1, 2, 3, 4, 5 (each on a new line)

// Regular arrow function
console.log("Example 1 - Regular:");
numbers1.forEach((n) => {
  console.log(n);
});
// Output: 1, 2, 3, 4, 5 (each on a new line)

/*
EXAMPLE 2: Printing with Additional Text
*/
const names = ["Alice", "Bob", "Charlie"];

// One-line arrow function
console.log("Example 2 - One-line:");
names.forEach(name => console.log(`Hello, ${name}!`));
// Output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"

// Regular arrow function
console.log("Example 2 - Regular:");
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
// Output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"

/*
EXAMPLE 3: Updating a Variable (Side Effect)
*/
let sum = 0;
const numbers2 = [10, 20, 30];

// One-line arrow function
numbers2.forEach(n => sum += n);
console.log("Example 3 - One-line sum:", sum); // 60

// Reset sum
sum = 0;

// Regular arrow function
numbers2.forEach((n) => {
  sum += n;
});
console.log("Example 3 - Regular sum:", sum); // 60

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array [1, 2, 3, 4, 5], use forEach() to print each number 
multiplied by 2.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [1, 2, 3, 4, 5];

// Your solution here (one-line arrow function):
// exercise1Array.forEach(

// Your solution here (regular arrow function):
// exercise1Array.forEach((

// Expected output: 2, 4, 6, 8, 10 (each on a new line)

/*
EXERCISE 2
----------
Given the array ["apple", "banana", "orange"], use forEach() to print 
each fruit name in uppercase.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = ["apple", "banana", "orange"];

// Your solution here (one-line arrow function):
// exercise2Array.forEach(

// Your solution here (regular arrow function):
// exercise2Array.forEach((

// Expected output: "APPLE", "BANANA", "ORANGE" (each on a new line)

/*
EXERCISE 3
----------
Given the array [5, 10, 15, 20], use forEach() to calculate and print 
the sum of all numbers. Use a variable to store the sum.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [5, 10, 15, 20];
let exercise3Sum = 0;

// Your solution here (one-line arrow function):
exercise3Array.forEach(

// Your solution here (regular arrow function):
exercise3Array.forEach((

// Uncomment to test:
// console.log("Exercise 3 - Sum:", exercise3Sum);
// Expected: 50

/*
EXERCISE 4
----------
Given the array ["red", "green", "blue"], use forEach() to print each 
color with the text "Color: " before it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = ["red", "green", "blue"];

// Your solution here (one-line arrow function):
// exercise4Array.forEach(

// Your solution here (regular arrow function):
// exercise4Array.forEach((

// Expected output: "Color: red", "Color: green", "Color: blue" (each on a new line)

/*
EXERCISE 5
----------
Given the array [2, 4, 6, 8], use forEach() to print each number squared 
(multiplied by itself).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [2, 4, 6, 8];

// Your solution here (one-line arrow function):
// exercise5Array.forEach(

// Your solution here (regular arrow function):
// exercise5Array.forEach((

// Expected output: 4, 16, 36, 64 (each on a new line)

