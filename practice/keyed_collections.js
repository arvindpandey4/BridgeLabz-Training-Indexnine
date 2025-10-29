/* Keyed Collections Practice */

const setofnumbers = new Set([1,2,3,3,3,4,4,5]);
console.log("Set of numbers:", setofnumbers);

const nums = new Array(1,2,3,4, 4, 4,5);
const uniquenums = new Set(nums);
console.log("Unique numbers from array:", uniquenums);

/* Map Practice */

const sessions = new Map();
function startsession(UserId) {
    sessions.set(UserId, Date.now());
}

function endsession(UserId) {
    sessions.delete(UserId);
}

console.log("Sessions before starting:", sessions);
startsession("user1");
startsession("user2");
console.log("Sessions after starting user1 and user2:", sessions);
endsession("user1");
console.log("Sessions after ending user1:", sessions);


/* WeakSet Practice */
const activeElements = new WeakSet();

function activate(element) {
  activeElements.add(element);
}

function isActive(element) {
  return activeElements.has(element);
}

/* WeakMap Practice */
const privateData = new WeakMap();

class User {
  constructor(name, password) {
    this.name = name;
    privateData.set(this, { password });
  }

  getPassword() {
    return privateData.get(this).password;
  }
}

const u1 = new User("Aarav", "12345");
console.log(u1.getPassword());