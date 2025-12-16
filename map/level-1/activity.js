// ============================================
// MAP FUNCTION - LEVEL 1
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
WHAT IS THE map() FUNCTION?
===========================
The map() function is used to TRANSFORM every element in an array and 
create a new array with the transformed values. It doesn't change the 
original array - it returns a brand new array.

Key Points:
- Takes each element from the original array
- Applies a function to transform it
- Returns a new array with the same length
- Original array stays unchanged
*/

/*
SYNTAX EXAMPLES
===============
*/

// One-Line Arrow Function
// const newArray = array.map(element => transformedElement);

// Regular Arrow Function Style
// const newArray = array.map((element) => {
//   return transformedElement;
// });

// Classic Function Style (for comparison)
// const newArray = array.map(function(element) {
//   return transformedElement;
// });

/*
EXAMPLE 1: Doubling Numbers
*/
const numbers1 = [1, 2, 3, 4, 5];

// One-line arrow function
const doubled1 = numbers1.map(n => n * 2);
console.log("Example 1 - One-line:", doubled1); // [2, 4, 6, 8, 10]

// Regular arrow function
const doubled2 = numbers1.map((n) => {
  return n * 2;
});
console.log("Example 1 - Regular:", doubled2); // [2, 4, 6, 8, 10]

/*
EXAMPLE 2: Converting to Uppercase
*/
const names = ["alice", "bob", "charlie"];

// One-line arrow function
const upperNames1 = names.map(name => name.toUpperCase());
console.log("Example 2 - One-line:", upperNames1); // ["ALICE", "BOB", "CHARLIE"]

// Regular arrow function
const upperNames2 = names.map((name) => {
  return name.toUpperCase();
});
console.log("Example 2 - Regular:", upperNames2); // ["ALICE", "BOB", "CHARLIE"]

/*
EXAMPLE 3: Adding Text to Each Element
*/
const items = ["apple", "banana", "orange"];

// One-line arrow function
const withPrefix1 = items.map(item => `Fruit: ${item}`);
console.log("Example 3 - One-line:", withPrefix1); // ["Fruit: apple", "Fruit: banana", "Fruit: orange"]

// Regular arrow function
const withPrefix2 = items.map((item) => {
  return `Fruit: ${item}`;
});
console.log("Example 3 - Regular:", withPrefix2); // ["Fruit: apple", "Fruit: banana", "Fruit: orange"]

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array [1, 2, 3, 4, 5], use map() to create a new array 
where each number is multiplied by 3.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [1, 2, 3, 4, 5];

// Your solution here (one-line arrow function):
const exercise1Result1 = exercise1Array => exercise1Array.map(n => n * 3);

// Your solution here (regular arrow function):
const exercise1Result2 = (exercise1Array) => {
  return exercise1Array.map(n => n * 3)
}

// Uncomment to test:
console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: [3, 6, 9, 12, 15]

/*
EXERCISE 2
----------
Given the array ["hello", "world", "javascript"], use map() to create 
a new array where each string has "!" added at the end.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = ["hello", "world", "javascript"];

// Your solution here (one-line arrow function):
const exercise2Result1 = exercise2Array => exercise2Array.map(n + "!");

// Your solution here (regular arrow function):
const exercise2Result2 = (exercise2Array) => {
  return exercise2Array.map(n + "!");
} 

// Uncomment to test:
console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: ["hello!", "world!", "javascript!"]

/*
EXERCISE 3
----------
Given the array [10, 20, 30, 40], use map() to create a new array 
where each number is divided by 2.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [10, 20, 30, 40];

// Your solution here (one-line arrow function):
const exercise3Result1 = exercise3Array => exercise3Array.map(n => n / 2)

// Your solution here (regular arrow function):
const exercise3Result2 = (exercise3Array) => {
  return exercise3Array.map(n => n / 2);
}

// Uncomment to test:
console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: [5, 10, 15, 20]

/*
EXERCISE 4
----------
Given the array ["cat", "dog", "bird"], use map() to create a new array 
where each string is converted to uppercase and has "s" added at the end 
(making them plural).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = ["cat", "dog", "bird"];

// Your solution here (one-line arrow function):
const exercise4Result1 = exercise4Array => exercise4Array.map(n => text.toUpperCase(n) + "s");

// Your solution here (regular arrow function):
const exercise4Result2 = (exercise4Array) =>{
  return exercise4Array.map(n => text.toUpperCase(n) + "s");
}

// Uncomment to test:
console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: ["CATS", "DOGS", "BIRDS"]

/*
EXERCISE 5
----------
Given the array [2, 4, 6, 8], use map() to create a new array where 
each number is squared (multiplied by itself).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [2, 4, 6, 8];

// Your solution here (one-line arrow function):
const exercise5Result1 = exercise5Array => exercise5Array.map(n=> n * n);

// Your solution here (regular arrow function):
const exercise5Result2 = (exercise5Array) => {
  return exercise5Array.map(n=> n * n)
}

// Uncomment to test:
console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
// Expected: [4, 16, 36, 64]

