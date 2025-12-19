type StringOrNumber = string | number;

interface Config {
  host: string;
  port: number;
  debug?: boolean;
}

function processInput(input: StringOrNumber): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toString();
}

function getConfig(overrides?: Partial<Config>): Config {
  const defaultConfig: Config = {
    host: "localhost",
    port: 3000,
    debug: false
  };

  return { ...defaultConfig, ...overrides };
}

const config = getConfig({ port: 8080 });
console.log(config);

console.log(processInput("hello"));
console.log(processInput(42));

function mapArray<T, U>(array: T[], transform: (item: T) => U): U[] {
  return array.map(transform);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = mapArray(numbers, (n) => n * 2);
console.log(doubled);

const strings = ["a", "b", "c"];
const upper = mapArray(strings, (s) => s.toUpperCase());
console.log(upper);

export { StringOrNumber, Config, processInput, getConfig, mapArray };
