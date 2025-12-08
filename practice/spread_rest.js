const arr = [10,20,30,40];
const [a,b,...rest] = arr;
console.log(a,b,rest);

const obj = { name: "Aarav", age: 22, city: "Delhi" };
const { name, city: town, ...other } = obj;
console.log(name, town, other);

function join(separator, ...items) {
  return items.join(separator);
}
console.log(join("-", "a","b","c"));

const base = { x:1, y:2 };
const extra = { y:20, z:3 };
const merged = { ...base, ...extra };
console.log("merged:", merged);
