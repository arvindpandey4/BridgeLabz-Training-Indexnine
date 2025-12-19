class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateAge(age: number): void {
  if (age < 18) {
    throw new ValidationError("Age must be at least 18");
  }
}

function processUser(name: string, email: string, age: number): string {
  try {
    if (!name) {
      throw new CustomError("Name cannot be empty");
    }

    if (!validateEmail(email)) {
      throw new ValidationError("Invalid email format");
    }

    validateAge(age);

    return `User ${name} processed successfully`;
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`Validation failed: ${error.message}`);
    } else if (error instanceof CustomError) {
      console.log(`Custom error: ${error.message}`);
    } else {
      console.log(`Unknown error: ${error}`);
    }
    throw error;
  }
}

try {
  processUser("John", "john@example.com", 25);
} catch (e) {
  console.log("Error caught");
}

export { CustomError, ValidationError, processUser };
