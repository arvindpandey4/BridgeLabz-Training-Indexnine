"use strict";

function createCounter() {
  let count = 0;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount() { return count; }
  };
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("cached");
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const calc = memoize((n) => {
  console.log("computing");
  return n * n;
});

console.log(calc(5));
console.log(calc(5));

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));

class SimpleEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((cb) => cb.apply(this, args));
    }
  }
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
  }
}

const emitter = new SimpleEmitter();
emitter.on("user:login", (username) => {
  console.log(username + " logged in");
});
emitter.emit("user:login", "Alice");
emitter.emit("user:login", "Bob");

function fetchData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ url, data: "data" });
    }, 500);
  });
}

fetchData("api/users")
  .then((response) => {
    console.log("Fetched:", response);
    return response.data;
  })
  .then((data) => {
    console.log("Processing:", data);
    return data.toUpperCase();
  })
  .then((result) => {
    console.log("Result:", result);
  });

async function getUserData() {
  try {
    const user = await fetchData("api/user/1");
    console.log("User:", user);
    const posts = await fetchData("api/user/1/posts");
    console.log("Posts:", posts);
    return { user, posts };
  } catch (error) {
    console.error("Error:", error);
  }
}

const user = { name: "John", age: 25 };
const userProxy = new Proxy(user, {
  get(target, prop) {
    console.log("Getting: " + prop);
    return target[prop];
  },
  set(target, prop, value) {
    console.log("Setting " + prop + " to " + value);
    target[prop] = value;
    return true;
  }
});

userProxy.name;
userProxy.age = 26;

module.exports = { createCounter, memoize, curry, SimpleEmitter, fetchData, getUserData };
