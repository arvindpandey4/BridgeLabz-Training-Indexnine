let baseUser = {
  login() {
    console.log("User logged in");
  }
};

let adminUser = Object.create(baseUser);
adminUser.deleteUser = function () {
  console.log("User deleted");
};

adminUser.login();
adminUser.deleteUser();

console.log(adminUser.__proto__ === baseUser);
console.log([].__proto__ === Array.prototype);
