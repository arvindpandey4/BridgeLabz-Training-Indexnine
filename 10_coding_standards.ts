namespace CodingStandards {
  export interface INamingConvention {
    classNamePascalCase: string;
    variableNameCamelCase: string;
    constantNameUpperCase: string;
  }

  export class StandardsChecker {
    private errors: string[] = [];

    checkClassName(name: string): boolean {
      return /^[A-Z]/.test(name);
    }

    checkVariableName(name: string): boolean {
      return /^[a-z]/.test(name);
    }

    checkConstantName(name: string): boolean {
      return /^[A-Z_]+$/.test(name);
    }

    validate(className: string, variableName: string, constantName: string): boolean {
      this.errors = [];

      if (!this.checkClassName(className)) {
        this.errors.push(`Class name should be PascalCase: ${className}`);
      }

      if (!this.checkVariableName(variableName)) {
        this.errors.push(`Variable name should be camelCase: ${variableName}`);
      }

      if (!this.checkConstantName(constantName)) {
        this.errors.push(`Constant name should be UPPER_CASE: ${constantName}`);
      }

      return this.errors.length === 0;
    }

    getErrors(): string[] {
      return this.errors;
    }
  }

  export const MAX_RETRY_ATTEMPTS = 3;
  export const DEFAULT_TIMEOUT = 5000;

  export class CodeStandardsConfig {
    readonly indent: number = 2;
    readonly maxLineLength: number = 100;
    readonly useStrict: boolean = true;
  }
}

const checker = new CodingStandards.StandardsChecker();
const isValid = checker.validate("MyClass", "myVariable", "MY_CONSTANT");
console.log(isValid ? "Valid" : "Invalid");
if (!isValid) {
  console.log(checker.getErrors());
}

export { CodingStandards };
