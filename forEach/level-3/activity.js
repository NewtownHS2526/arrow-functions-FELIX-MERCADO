// ============================================
// FOREACH FUNCTION - LEVEL 3
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

Use forEach() to print each product's total value (price * quantity) 
in the format: "Laptop: $2000 total".

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
exercise1Array.forEach(word => console.log(product, ": $", word.quantity * word.price, "total");

// Your solution here (regular arrow function):

exercise1Array.forEach(word => {
  return console.log(word.product, ": $", word.quantity * word.price, "total";
})

// Expected output:
// "Laptop: $2000 total"
// "Mouse: $125 total"
// "Keyboard: $225 total"

/*
EXERCISE 2
----------
Given the array ["hello", "world", "javascript", "coding"], use forEach() 
to print only the words that have more than 5 characters.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = ["hello", "world", "javascript", "coding"];

// Your solution here (one-line arrow function):
exercise2Array.forEach(word => console.log(word.length > 5));

// Your solution here (regular arrow function):
exercise2Array.forEach(word => {
    return console.log(word.length > 5)
})

// Expected output: "javascript", "coding" (each on a new line)

/*
EXERCISE 3
----------
Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use forEach() to calculate 
the product (multiplication) of all numbers. Store the result in a variable 
and print it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let exercise3Product = 1;

// Your solution here (one-line arrow function):
exercise3Array.forEach(a => exercise3Product += a);

// Your solution here (regular arrow function):
exercise3Array.forEach(a => {
    return exercise3Product += a;
})

// Uncomment to test:
// console.log("Exercise 3 - Product:", exercise3Product);
// Expected: 3628800

/*
EXERCISE 4
----------
Given the array of strings ["apple", "banana", "cherry"], use forEach() 
to print each word reversed. For example, "apple" becomes "elppa".

Hint: You can use split(''), reverse(), and join('') methods.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = ["apple", "banana", "cherry"];

// Your solution here (one-line arrow function):/*  */
exercise4Array.forEach(wordreverse => wordreverse.join("").reverse().split(""))

// Your solution here (regular arrow function):
exercise4Array.forEach(wordreverse => {
  return wordreverse.join("").reverse().split("");
})


// Expected output: "elppa", "ananab", "yrrehc" (each on a new line)

/*
EXERCISE 5
----------
Given the array [12, 45, 8, 23, 56, 9], use forEach() to find and print 
the maximum number. Store the maximum in a variable and print it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [12, 45, 8, 23, 56, 9];
let exercise5Max = exercise5Array[0]; // Start with first element

// Your solution here (one-line arrow function):
exercise5Array.forEach(num => exercise5Max = num > exercise5Max ? num : exercise5Max);

console.log(exercise5Max);

// Your solution here (regular arrow function):
exercise5Array.forEach(exercise5Array => {
  if (exercise5Max > exercise5Array) {
    return exercise5Array = exercise5Max
  }
})

// Uncomment to test:
// console.log("Exercise 5 - Maximum:", exercise5Max);
// Expected: 56

