class PaymentError extends Error {
  constructor(message) {
    super(message);
    this.name = "PaymentError";
  }
}

function makePayment(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 100) reject(new PaymentError("Amount too low"));
    else resolve("Payment success");
  });
}

Promise.all([
  makePayment(200),
  makePayment(150)
]).then(console.log);

makePayment(50)
  .catch(err => console.log(err.name, err.message));
