class Person {
  private name: string;
  protected age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    if (age > 0) {
      this.age = age;
    }
  }
}

class Employee extends Person {
  private employeeId: string;

  constructor(name: string, age: number, email: string, employeeId: string) {
    super(name, age, email);
    this.employeeId = employeeId;
  }

  getEmployeeId(): string {
    return this.employeeId;
  }

  getDetails(): string {
    return `${this.getName()} - Age: ${this.getAge()} - ID: ${this.employeeId}`;
  }
}

const emp = new Employee("Alice", 30, "alice@example.com", "EMP001");
console.log(emp.getDetails());
console.log(emp.email);

export { Person, Employee };
