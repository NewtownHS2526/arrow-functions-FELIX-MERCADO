// ============================================
// REDUCE FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array of objects:
[
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Mouse", price: 25, quantity: 5 },
  { product: "Keyboard", price: 75, quantity: 3 }
]

Use reduce() to calculate the total value of all products (price * quantity for each, then sum).

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Mouse", price: 25, quantity: 5 },
  { product: "Keyboard", price: 75, quantity: 3 }
];

// Your solution here (one-line arrow function):
const exercise1Result1 = exercise1Array.reduce((total, n) => n.price * n.quantity + total, 0)

// Your solution here (regular arrow function):
const exercise1Result2 = exercise1Array.reduce((total, n) => {
    return n.price * n.quantity + total, 0;
}, 1)

// Uncomment to test:
console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: 2350 (2000 + 125 + 225)

/*
EXERCISE 2
----------
Given the array ["apple", "banana", "cherry", "date"], use reduce() to create 
an object where each fruit name is a key and its length is the value.

Expected result: { apple: 5, banana: 6, cherry: 6, date: 4 }

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = ["apple", "banana", "cherry", "date"];

// Your solution here (one-line arrow function):
// const exercise2Result1 = 

// Your solution here (regular arrow function):
// const exercise2Result2 = 

// Uncomment to test:
// console.log("Exercise 2 - One-line:", exercise2Result1);
// console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: { apple: 5, banana: 6, cherry: 6, date: 4 }

/*
EXERCISE 3
----------
Given the array [5, 10, 15, 20, 25], use reduce() to calculate the average 
(mean) of all numbers.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [5, 10, 15, 20, 25];

// Your solution here (one-line arrow function):
const exercise3Result1 = exercise3Array.reduce((total, n) => n + total, 0) / exercise3Array.length;

// Your solution here (regular arrow function):
const exercise3Result2 = (exercise3Array) => {
  return exercise3Array.reduce(n + total, 0) / exercise3Array.length;
}

// Uncomment to test:
console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: 15

/*
EXERCISE 4
----------
Given the array of objects:
[
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 95 }
]

Use reduce() to find the person with the highest score. Return the entire object.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 95 }
];

// Your solution here (one-line arrow function):
const exercise4Result1 = exercise4Array((total, n) => total.score > n.score? total : n)

// Your solution here (regular arrow function):
const exercise4Result2 = exercise4Array((total, n) => {
    return total.score > n.score? total : n;
}, 0)

// Uncomment to test:
console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: { name: "Diana", score: 95 }

/*
EXERCISE 5
----------
Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use reduce() to create 
an object with two properties: "even" (array of even numbers) and "odd" 
(array of odd numbers).

Expected result: { even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] }

Write your solution using:
- One-line arrow function (if possible, or regular)
- Regular arrow function
*/

const exercise5Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your solution here (one-line arrow function):
const exercise5Result1 = exercise5Array.reduce((total, n) => n % 2 === 0? total.odd.push[n] : total.even.push[n])

// Your solution here (regular arrow function):
const exercise5Result2 = exercise5Array.reduce((total, n) => {
  if (n % 2 === 0) {
    total.even.push(n);
  } else {
    total.odd.push(n);
  }
  return total;
}, { even: [], odd: [] });

// Uncomment to test:
// console.log("Exercise 5 - One-line:", exercise5Result1);
// console.log("Exercise 5 - Regular:", exercise5Result2);
// Expected: { even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] }