function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const c = makeCounter();
console.log(c(), c(), c());

function makeAdder(x) {
  return function(y) { return x + y; };
}
const add5 = makeAdder(5);
console.log(add5(2), add5(10));

const add = a => b => c => a + b + c;
console.log(add(1)(2)(3));
