interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} barks`);
  }
}

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} meows`);
  }
}

class Bird implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} chirps`);
  }
}

const dog = new Dog("Rex");
const cat = new Cat("Whiskers");
const bird = new Bird("Tweety");

dog.sound();
cat.sound();
bird.sound();

export { Dog, Cat, Bird };
