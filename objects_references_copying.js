let productA = { name: "Shoes", price: 2000 };
let productB = productA;

productB.price = 2500;
console.log(productA.price);

let shallowCopy = { ...productA };
shallowCopy.price = 3000;
console.log(productA.price, shallowCopy.price);

let deepCopy = JSON.parse(JSON.stringify(productA));
deepCopy.price = 4000;
console.log(productA.price, deepCopy.price);
