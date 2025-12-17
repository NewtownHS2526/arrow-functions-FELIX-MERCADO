// ============================================
// FILTER FUNCTION - LEVEL 2
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array of objects:
[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 16 }
]

Use filter() to create a new array with only the people who are 18 or older.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 16 }
];

// Your solution here (one-line arrow function):
const exercise1Result1 = exercise1Array => exercise1Array.filter(n => n.age > 18)

// Your solution here (regular arrow function):
const exercise1Result2 = (exercise1Array) => {
  return exercise1Array.filter(n => n.age > 18)
}

// Uncomment to test:
console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

/*
EXERCISE 2
----------
Given the array [5, -3, 10, -8, 15, -1, 20], use filter() to create a new 
array with only the positive numbers (greater than 0).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [5, -3, 10, -8, 15, -1, 20];

// Your solution here (one-line arrow function):
const exercise2Result1 = exercise2Array => exercise2Array.filter(n => n > 0);

// Your solution here (regular arrow function):
const exercise2Result2 = (exercise2Array) => {
  return exercise2Array.filter(n => n > 0);
}

// Uncomment to test:
console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: [5, 10, 15, 20]

/*
EXERCISE 3
----------
Given the array ["javascript", "python", "java", "c++", "html", "css"], 
use filter() to create a new array with only the programming languages 
that have more than 4 characters.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = ["javascript", "python", "java", "c++", "html", "css"];

// Your solution here (one-line arrow function):
const exercise3Result1 = exercise3Array => exercise3Array.filter(n => n.lenght > 4);

// Your solution here (regular arrow function):
const exercise3Result2 = (exercise3Array) => {
  return exercise3Array.filter(n => n.lenght > 4);
}

// Uncomment to test:
console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: ["javascript", "python"]

/*
EXERCISE 4
----------
Given the array [12, 45, 8, 23, 56, 9, 34, 67], use filter() to create a 
new array with only the numbers that are between 20 and 50 (inclusive).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [12, 45, 8, 23, 56, 9, 34, 67];

// Your solution here (one-line arrow function):
const exercise4Result1 = exercise4Array => exercise4Array.filter(n => n > 20 && n < 50);

// Your solution here (regular arrow function):
const exercise4Result2 = (exercise4Array) => {
  return exercise4Array.filter(n => n > 20 && n < 50);
}

// Uncomment to test:
console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: [45, 23, 34]

/*
EXERCISE 5
----------
Given the array ["apple", "banana", "cherry", "date", "elderberry"], 
use filter() to create a new array with only the fruits that contain 
the letter "a".

Hint: Use the includes() method.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = ["apple", "banana", "cherry", "date", "elderberry"];

// Your solution here (one-line arrow function):
const exercise5Result1 = exercise5Array.includes("a");

// Your solution here (regular arrow function):
const exercise5Result2 = exercise5Array => {
  return exercise5Array.includes("a");
}

// Uncomment to test:
console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
// Expected: ["apple", "banana", "date"]

