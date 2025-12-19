console.log(testVar);
var testVar = 10;

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4));

function* orderSteps() {
  yield "Order placed";
  yield "Payment done";
  yield "Shipped";
}

for (let step of orderSteps()) {
  console.log(step);
}

async function* asyncOrders() {
  yield "Order 1";
  yield "Order 2";
}

(async () => {
  for await (let o of asyncOrders()) {
    console.log(o);
  }
})();
