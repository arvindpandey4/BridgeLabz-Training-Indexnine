const nums = [1,2,3,4,5];

nums.forEach(n => console.log("forEach:", n));

const doubled = nums.map(n => n * 2);
console.log("map:", doubled);

const evens = nums.filter(n => n % 2 === 0);
console.log("filter:", evens);

const sum = nums.reduce((acc, x) => acc + x, 0);
console.log("reduce sum:", sum);

const firstGt3 = nums.find(n => n > 3);
console.log("find:", firstGt3);

const indexes = nums.map((v,i) => `${i}:${v}`);
console.log("map with index:", indexes);

const sorted = [3,1,4,2].sort((a,b) => a-b);
console.log("sort:", sorted);
