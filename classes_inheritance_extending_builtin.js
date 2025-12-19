class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  info() {
    console.log(this.name, this.price);
  }
}

class DiscountProduct extends Product {
  constructor(name, price, discount) {
    super(name, price);
    this.discount = discount;
  }
  finalPrice() {
    return this.price - this.discount;
  }
}

class Cart extends Array {
  total() {
    return this.reduce((sum, item) => sum + item.price, 0);
  }
}

let p1 = new DiscountProduct("Shoes", 2000, 300);
p1.info();
console.log(p1.finalPrice());

let cart = new Cart();
cart.push(p1);
cart.push(new Product("Bag", 1500));
console.log(cart.total());
