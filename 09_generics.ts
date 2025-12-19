interface Repository<T> {
  add(item: T): void;
  remove(id: number): boolean;
  getAll(): T[];
  findById(id: number): T | undefined;
}

class GenericRepository<T extends { id: number }> implements Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(id: number): boolean {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  getAll(): T[] {
    return this.items;
  }

  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

const userRepo = new GenericRepository<User>();
userRepo.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepo.add({ id: 2, name: "Bob", email: "bob@example.com" });

console.log(userRepo.getAll());
console.log(userRepo.findById(1));

const productRepo = new GenericRepository<Product>();
productRepo.add({ id: 1, title: "Laptop", price: 999 });
productRepo.add({ id: 2, title: "Mouse", price: 25 });

console.log(productRepo.getAll());
console.log(productRepo.findById(2));

export { GenericRepository, Repository };
