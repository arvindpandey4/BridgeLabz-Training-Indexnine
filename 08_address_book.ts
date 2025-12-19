interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

class AddressBook {
  private contacts: Contact[] = [];
  private nextId: number = 1;

  addContact(name: string, email: string, phone: string, address: string, city: string): Contact {
    const contact: Contact = {
      id: this.nextId++,
      name,
      email,
      phone,
      address,
      city
    };
    this.contacts.push(contact);
    return contact;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find(c => c.id === id);
  }

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  updateContact(id: number, updates: Partial<Contact>): Contact | undefined {
    const contact = this.getContact(id);
    if (contact) {
      Object.assign(contact, updates);
    }
    return contact;
  }

  deleteContact(id: number): boolean {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  }

  searchByName(name: string): Contact[] {
    return this.contacts.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
  }

  searchByCity(city: string): Contact[] {
    return this.contacts.filter(c => c.city.toLowerCase() === city.toLowerCase());
  }
}

const addressBook = new AddressBook();
addressBook.addContact("John Doe", "john@example.com", "1234567890", "123 Main St", "New York");
addressBook.addContact("Jane Smith", "jane@example.com", "9876543210", "456 Oak Ave", "Boston");
addressBook.addContact("Bob Wilson", "bob@example.com", "5555555555", "789 Pine Rd", "New York");

console.log(addressBook.getAllContacts());
console.log(addressBook.searchByCity("New York"));
console.log(addressBook.searchByName("John"));

addressBook.updateContact(1, { phone: "1111111111" });
console.log(addressBook.getContact(1));

export { AddressBook, Contact };
