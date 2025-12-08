const s = "  Hello World  ";
console.log(s.length, s.trim(), s.toUpperCase(), s.includes("World"));

const piStr = "3.14159";
console.log("parseFloat:", parseFloat(piStr), "toFixed(2):", parseFloat(piStr).toFixed(2));

console.log("Number conversion:", Number("42"), +"42");

console.log("template:", `Value: ${10+5}`);

const big = BigInt(9007199254740991) + 1n;
console.log("BigInt:", big);
