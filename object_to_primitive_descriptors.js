let cartItem = {
  price: 1000,
  valueOf() {
    return this.price;
  },
  toString() {
    return "CartItem";
  }
};

console.log(cartItem + 500);

Object.defineProperty(cartItem, "price", {
  writable: false
});

cartItem.price = 2000;
console.log(cartItem.price);
