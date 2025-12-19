"use strict";

(function () {
  let privateVar = "private";
  console.log(privateVar);
})();

(function (name) {
  console.log("Hello:", name);
})("World");

const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log("Factorial:", factorial(5));

const person = {
  name: "Alice",
  greet: function (greeting) {
    console.log(greeting + ", " + this.name);
  }
};

const another = { name: "Bob" };
person.greet.call(another, "Hi");
person.greet.apply(another, ["Hello"]);
const bound = person.greet.bind(another);
bound("Hey");

const add = new Function("a", "b", "return a + b");
console.log("New Function:", add(2, 3));

setTimeout(() => {
  console.log("Timeout executed");
}, 1000);

let count = 0;
const int = setInterval(() => {
  count++;
  if (count >= 3) clearInterval(int);
}, 500);

function logging(func) {
  return function (...args) {
    console.log("Called with:", args);
    return func.apply(this, args);
  };
}

const mult = logging((a, b) => a * b);
mult(3, 4);

module.exports = { factorial, person, add };
