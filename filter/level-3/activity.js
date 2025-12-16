// ============================================
// FILTER FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array of objects:
[
  { product: "Laptop", price: 1000, inStock: true },
  { product: "Mouse", price: 25, inStock: false },
  { product: "Keyboard", price: 75, inStock: true },
  { product: "Monitor", price: 300, inStock: false }
]

Use filter() to create a new array with only the products that are in stock.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [
  { product: "Laptop", price: 1000, inStock: true },
  { product: "Mouse", price: 25, inStock: false },
  { product: "Keyboard", price: 75, inStock: true },
  { product: "Monitor", price: 300, inStock: false }
];

// Your solution here (one-line arrow function):
const exercise1Result1 = exercise1Array.filter(n => n.inStock);

// Your solution here (regular arrow function):
const exercise1Result2 = exercise1Array.filter(n => {
    return n.inStock;
})

// Uncomment to test:
// console.log("Exercise 1 - One-line:", exercise1Result1);
// console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: [{ product: "Laptop", price: 1000, inStock: true }, { product: "Keyboard", price: 75, inStock: true }]

/*
EXERCISE 2
----------
Given the array of objects:
[
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "London" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "Diana", age: 28, city: "Paris" }
]

Use filter() to create a new array with only the people who live in "New York".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "London" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "Diana", age: 28, city: "Paris" }
];

// Your solution here (one-line arrow function):
const exercise2Result1 = exercise2Array.filter(n => n.city === "New York");

// Your solution here (regular arrow function):
const exercise2Result2 = (exercise2Array) => {
    return exercise2Array.filter(n => n.city === "New York");
} 

// Uncomment to test:
console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: [{ name: "Alice", age: 25, city: "New York" }, { name: "Charlie", age: 35, city: "New York" }]

/*
EXERCISE 3
----------
Given the array [100, 250, 75, 500, 120, 300, 80], use filter() to create 
a new array with only the numbers that are multiples of 25.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [100, 250, 75, 500, 120, 300, 80];

// Your solution here (one-line arrow function):
const exercise3Result1 = exercise3Array => exercise3Array.filter(n => n > 25)

// Your solution here (regular arrow function):
const exercise3Result2 = exercise3Array => {
    return exercise3Array.filter(n > 25)
}

// Uncomment to test:
// console.log("Exercise 3 - One-line:", exercise3Result1);
// console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: [100, 250, 75, 500, 300]

/*
EXERCISE 4
----------
Given the array of objects:
[
  { title: "Book A", pages: 150 },
  { title: "Book B", pages: 300 },
  { title: "Book C", pages: 200 },
  { title: "Book D", pages: 450 }
]

Use filter() to create a new array with only the books that have more than 
200 pages.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [
  { title: "Book A", pages: 150 },
  { title: "Book B", pages: 300 },
  { title: "Book C", pages: 200 },
  { title: "Book D", pages: 450 }
];

// Your solution here (one-line arrow function):
const exercise4Result1 = exercise4Array => exercise4Array.filter(n => n.pages > 200)

// Your solution here (regular arrow function):
const exercise4Result2 = (exercise4Array) => {
  return exercise4Array.filter(n => n.pages > 200);
}

// Uncomment to test:
// console.log("Exercise 4 - One-line:", exercise4Result1);
// console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: [{ title: "Book B", pages: 300 }, { title: "Book D", pages: 450 }]

/*
EXERCISE 5
----------
Given the array ["hello", "world", "javascript", "coding", "fun"], 
use filter() to create a new array with only the words that have an 
odd number of characters.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = ["hello", "world", "javascript", "coding", "fun"];

// Your solution here (one-line arrow function):
// const exercise5Result1 = 

// Your solution here (regular arrow function):
// const exercise5Result2 = 

// Uncomment to test:
// console.log("Exercise 5 - One-line:", exercise5Result1);
// console.log("Exercise 5 - Regular:", exercise5Result2);
// Expected: ["hello", "world", "coding", "fun"]

