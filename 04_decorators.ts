function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey}`);
    return original.apply(this, args);
  };

  return descriptor;
}

function Log(target: any, propertyKey: string) {
  console.log(`Property ${propertyKey} is being logged`);
}

class Calculator {
  @Log
  result: number = 0;

  @Validate
  add(a: number, b: number): number {
    this.result = a + b;
    return this.result;
  }

  @Validate
  subtract(a: number, b: number): number {
    this.result = a - b;
    return this.result;
  }

  @Validate
  multiply(a: number, b: number): number {
    this.result = a * b;
    return this.result;
  }
}

const calc = new Calculator();
calc.add(5, 3);
calc.subtract(10, 4);
calc.multiply(6, 7);

export { Calculator };
