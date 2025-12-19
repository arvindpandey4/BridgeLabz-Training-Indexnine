interface Person {
  name: string;
  email: string;
  phone: string;
}

type AddressBookEntry = Person & {
  id: number;
  address: string;
  city: string;
};

type ContactType = "friend" | "family" | "work";

const sampleData: AddressBookEntry[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Main St",
    city: "New York"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "9876543210",
    address: "456 Oak Ave",
    city: "Boston"
  }
];

function getContact(id: number): AddressBookEntry | undefined {
  return sampleData.find(contact => contact.id === id);
}

function listContacts(): AddressBookEntry[] {
  return sampleData;
}

export { Person, AddressBookEntry, ContactType, getContact, listContacts };
