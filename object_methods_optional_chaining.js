let order = {
  id: 101,
  customer: {
    name: "Ravi",
    address: {
      city: "Delhi"
    }
  }
};

console.log(order.customer?.address?.city);
console.log(order.payment?.method);

order.total = function () {
  return 500 + 100;
};

console.log(order.total());
