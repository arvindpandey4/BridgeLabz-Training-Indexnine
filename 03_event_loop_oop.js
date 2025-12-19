"use strict";

console.log("1. Start");

setTimeout(() => {
  console.log("3. Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("2. Promise");
});

console.log("4. End");

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log("Hello: " + name);
});

emitter.emit("greet", "World");

emitter.once("special", () => {
  console.log("Once called");
});

emitter.emit("special");
emitter.emit("special");

if (!Array.prototype.myIncludes) {
  Array.prototype.myIncludes = function (element) {
    return this.indexOf(element) !== -1;
  };
}

console.log([1, 2, 3].myIncludes(2));

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " speaks");
};

const dog = new Animal("Dog");
dog.speak();

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(this.brand + " drives");
  }
}

const tesla = new Car("Tesla");
tesla.drive();

class ElectricCar extends Car {
  constructor(brand, battery) {
    super(brand);
    this.battery = battery;
  }
  charge() {
    console.log(this.brand + " charged to " + this.battery + "%");
  }
}

const model3 = new ElectricCar("Tesla Model 3", 85);
model3.drive();
model3.charge();

module.exports = { emitter, Animal, Car, ElectricCar };
