function fetchUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Aarav" });
  }, 500);
}

fetchUser(function (user) {
  console.log(user);
});

function fetchOrder() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Order fetched"), 500);
  });
}

fetchOrder()
  .then(res => {
    console.log(res);
    return "Payment done";
  })
  .then(msg => console.log(msg));
