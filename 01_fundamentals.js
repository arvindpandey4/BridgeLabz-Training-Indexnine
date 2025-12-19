"use strict";

console.log("Node version:", process.version);

let str = "5";
let num = 5;
console.log("Loose equality:", str == num);
console.log("Strict equality:", str === num);

let value = null ?? "default";
console.log("Nullish coalescing:", value);

let age = 20;
if (age >= 18) {
  console.log("Adult");
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5));

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3, 4));

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Spread array:", arr2);

let blockScoped = "block";
{
  let blockScoped = "inside";
  console.log("Inside:", blockScoped);
}
console.log("Outside:", blockScoped);

function outer(x) {
  return function inner(y) {
    return x + y;
  };
}
const add5 = outer(5);
console.log("Closure:", add5(3));

module.exports = { factorial, sum, outer };
