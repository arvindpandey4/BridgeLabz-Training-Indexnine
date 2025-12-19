function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHello = function () {
  console.log("Hello", this.name);
};

let u1 = new User("Aarav", 22);
let u2 = new User("Neha", 25);

u1.sayHello();
u2.sayHello();
