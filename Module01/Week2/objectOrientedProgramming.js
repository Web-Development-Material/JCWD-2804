// -- Object
// OOP adalah model pemrograman yang berfokus pada konsep objek dan kelas.

// Define an object to represent an employee
let employee = {
  name: "John Doe",
  age: 25,
  position: "Fullstack Developer",
  salary: 10000000,
  work: function () {
    console.log("Working...");
  },
  rest: function () {
    console.log("Resting...");
  },
};

// Accessing object properties
console.log(employee.name); // Output: John Doe
console.log(employee.age); // Output: 25

// Calling object methods
employee.work(); // Output: Working...
employee.rest(); // Output: Resting...

// *cara mendefinisikan object ada 3

// Membuat objek dengan objek literal
let person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Membuat objek dengan fungsi konstruktor
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

let person1 = new Person("John Doe", 30, "New York");

// Membuat objek dengan kelas (ES6)
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

let person2 = new Person("John Doe", 30, "New York");

// *cara menambahkan atau menghapus property

let person3 = {
  name: "John",
  age: 30,
  job: "Teacher",
};

// Adding a new property
person3.city = "New York";
console.log(person3); // Output: { name: 'John', age: 30, job: 'Teacher', city: 'New York' }

// Deleting a property
delete person3.job;
console.log(person3); // Output: { name: 'John', age: 30, city: 'New York' }

// *cara mengakses property pada object

// using dot notation
let person4 = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person4.name); // Output: John
console.log(person4.age); // Output: 30
console.log(person4.city); // Output: New York

// using square brackets
let person5 = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person5["name"]); // Output: John
console.log(person5["age"]); // Output: 30
console.log(person5["city"]); // Output: New York

// *penggunaan optional chaining

let person6 = {
  name: "John",
  age: 30,
  // address property is undefined
};

// Trying to access city without optional chaining would throw an error
// console.log(person6.address.city); // Error: Cannot read property 'city' of undefined

// Using optional chaining to safely access city property
console.log(person6.address?.city); // Output: undefined

// *penggunaan accessing key

let user = {
  name: "John Doe",
  email: "johndoe@example.com",
  membership: "gold",
};

let keys = Object.keys(user);
console.log(keys); // Output: ['name', 'email', 'membership']

// *penggunaaan for in pada object

let user2 = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in user2) {
  console.log(key); // Output: name, age, city
  console.log(user2[key]); // Output: John, 30, New York
}

// *penggunaan destructuring assignment

let user3 = {
  username: "John Doe",
  age: 30,
};

// Destructuring assignment
let { username, age } = user3;

console.log(username); // Output: John Doe
console.log(age); // Output: 30

// *penggunaan spread operator
// Operator spread (…) memungkinkan kita untuk dengan cepat menyalin seluruh atau sebagian dari array atau objek yang ada ke array atau objek lainnya.

// contoh 1 : menyalin keseluruhan array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2); // Output: [1, 2, 3]

// contoh 2 : menyalin sebagian array dan menambahkan nilai baru
let arr3 = [1, 2, 3];
let arr4 = [...arr3, 4, 5];

console.log(arr4); // Output: [1, 2, 3, 4, 5]

// contoh 3 : menggabungkan properti dari dua objek
let obj1 = { name: "John", age: 30 };
let obj2 = { email: "john@example.com", isAdmin: false };

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// *penggunaan keyword 'this'

// contoh 1 : penggunaan this pada object
let person7 = {
  name: "John",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
person7.greet(); // Output: Hello, my name is John

// contoh 2 : penggunaan this pada function
function sayHello() {
  console.log("Hello, " + this.name); // this.name merujuk pada variable global bernama 'name'
}
let name = "John";
sayHello(); // Output: Hello, John

// *penggunaan object built-in method
// Object.assign()
let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };
let merged = Object.assign(target, source);
console.log(merged); // Output: { a: 1, b: 4, c: 5 }

// Object.create()
let parent = { x: 1 };
let child = Object.create(parent);
console.log(child.x); // Output: 1

// Object.entries()
let obj3 = { a: 1, b: 2, c: 3 };
let entries = Object.entries(obj3);
console.log(entries); // Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Object.freeze()
let obj4 = { key: "value" };
Object.freeze(obj4);
obj4.key = "new value"; // This will not have any effect
console.log(obj4.key); // Output: value

// Object.is()
console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(1, 2)); // Output: false

// -- Class
// Class adalah template atau cetakan untuk membuat objek. Mereka mendefinisikan bagaimana sebuah objek harus dibuat berdasarkan serangkaian properti dan metode yang dimilikinya.

// Class declaration
class Car {
  // Constructor to initialize the car object
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  // Method to display information about the car
  displayInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

// Creating a new object from the Car class
let myCar = new Car("Toyota", "Corolla");
myCar.displayInfo(); // Output: Brand: Toyota, Model: Corolla

// Class expression
let Car = class {
  // Constructor to initialize the car object
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  // Method to display information about the car
  displayInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
};

// Creating a new object from the Car class
let myCar2 = new Car("Toyota", "Corolla");
myCar2.displayInfo(); // Output: Brand: Toyota, Model: Corolla

// *penggunaan public & private properties
class Car {
  constructor(brand) {
    this.brand = brand; // Public field
    this._mileage = 0; // Private field (convention)
  }

  drive(distance) {
    this._mileage += distance;
    console.log(`Driving ${distance} km...`);
  }

  getMileage() {
    return this._mileage;
  }
}

let myCar3 = new Car("Toyota");
console.log(myCar3.brand); // Output: Toyota
console.log(myCar3._mileage); // Output: 0 (conventionally private)
myCar3.drive(100); // Output: Driving 100 km...
console.log(myCar3.getMileage()); // Output: 100

// *penggunaan static properties
// Static properties -> variabel khusus yang melekat pada kelas itu sendiri, bukan pada setiap objek yang dibuat dari kelas tersebut.

class MathUtils {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2

// *penggunaan setter & getter
//

// contoh 1 : cek suhu
let thermostat = {
  _temperature: 0, // properti privat

  // getter
  get temperature() {
    console.log("Getting temperature");
    return this._temperature;
  },

  // setter
  set temperature(value) {
    console.log("Setting temperature");
    if (value < 0) {
      console.log("Temperature is too low.");
      return;
    }
    this._temperature = value;
  },
};

console.log(thermostat.temperature); // Getting temperature, Output: 0
thermostat.temperature = 25; // Setting temperature
console.log(thermostat.temperature); // Getting temperature, Output: 25
thermostat.temperature = -5; // Setting temperature, Temperature is too low.
console.log(thermostat.temperature); // Getting temperature, Output: 25 (tetap sama karena nilai -5 tidak valid)

// contoh 2 : cek luas persegi panjang
let rectangle = {
  _width: 0,
  _height: 0,

  // getter untuk lebar
  get width() {
    return this._width;
  },

  // setter untuk lebar
  set width(value) {
    if (value < 0) {
      console.log("Width cannot be negative");
      return;
    }
    this._width = value;
  },

  // getter untuk tinggi
  get height() {
    return this._height;
  },

  // setter untuk tinggi
  set height(value) {
    if (value < 0) {
      console.log("Height cannot be negative");
      return;
    }
    this._height = value;
  },

  // getter untuk menghitung luas
  get area() {
    return this._width * this._height;
  },
};

rectangle.width = 10;
rectangle.height = 5;
console.log(rectangle.area); // Output: 50

// *penggunaan encapsulation
// enkapsulasi -> cara untuk mengemas data bersama metode-metode yang mengelola data tersebut dalam satu tempat, seperti dalam sebuah kelas atau objek dalam JavaScript.

// contoh 1 : sistem deposit dan withdrawal
class BankAccount {
  constructor(accountNumber, balance) {
    this._accountNumber = accountNumber;
    this._balance = balance;
  }

  // Getter untuk accountNumber
  get accountNumber() {
    return this._accountNumber;
  }

  // Getter untuk balance
  get balance() {
    return this._balance;
  }

  // Method untuk deposit
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(
        `Successfully deposited ${amount}. New balance: ${this._balance}`
      );
    } else {
      console.log("Deposit amount must be greater than 0");
    }
  }

  // Method untuk withdrawal
  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(
        `Successfully withdrew ${amount}. New balance: ${this._balance}`
      );
    } else if (amount <= 0) {
      console.log("Withdrawal amount must be greater than 0");
    } else {
      console.log("Insufficient funds");
    }
  }
}

let account = new BankAccount("123456789", 1000);
console.log(account.accountNumber); // Output: 123456789
console.log(account.balance); // Output: 1000

account.deposit(500); // Output: Successfully deposited 500. New balance: 1500
account.withdraw(200); // Output: Successfully withdrew 200. New balance: 1300
account.withdraw(1500); // Output: Insufficient funds

// contoh 2 : menginputkan informasi nama, email, dan status keanggotaan
let User = (function () {
  let name;
  let email;
  let membershipStatus = "Free";

  function setName(newName) {
    name = newName;
  }

  function getName() {
    return name;
  }

  function setEmail(newEmail) {
    email = newEmail;
  }

  function getEmail() {
    return email;
  }

  function setMembershipStatus(newStatus) {
    if (["Free", "Basic", "Premium"].includes(newStatus)) {
      membershipStatus = newStatus;
    } else {
      console.log("Invalid membership status");
    }
  }

  function getMembershipStatus() {
    return membershipStatus;
  }

  return {
    setName: setName,
    getName: getName,
    setEmail: setEmail,
    getEmail: getEmail,
    setMembershipStatus: setMembershipStatus,
    getMembershipStatus: getMembershipStatus,
  };
})();

User.setName("John Doe");
User.setEmail("john@example.com");
User.setMembershipStatus("Premium");

console.log(User.getName()); // Output: John Doe
console.log(User.getEmail()); // Output: john@example.com
console.log(User.getMembershipStatus()); // Output: Premium

// -- Inheritance
// Inheritance -> konsep dalam pemrograman berorientasi objek yang memungkinkan kelas-kelas dibuat berdasarkan kelas-kelas lain

// contoh 1 : konsep antara hewan dan anjing
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  // Method overriding
  eat() {
    super.eat(); // Call the eat method of the parent class
    console.log(`${this.name} is eating loudly.`);
  }

  // Additional method
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// Create an instance of Dog
let dog = new Dog("Buddy", "Golden Retriever");
// Access inherited method
dog.eat(); // Output: Buddy is eating. Buddy is eating loudly.
// Access method of child class
dog.bark(); // Output: Buddy is barking.

// contoh 2 : konsep pewarisan antara employee and manager
// Parent class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  // Method
  getDetails() {
    return `${this.name} earns ${this.salary} per month.`;
  }
}

// Child class inheriting from Employee
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // Call the constructor of the parent class
    this.department = department;
  }

  // Method overriding
  getDetails() {
    return `${this.name} is a manager in the ${this.department} department.`;
  }

  // Additional method
  manageTeam() {
    console.log(`${this.name} is managing a team.`);
  }
}

// Create an instance of Manager
let manager = new Manager("Alice", 5000, "Marketing");
// Access inherited method
console.log(manager.getDetails()); // Output: Alice is a manager in the Marketing department.
// Access method of child class
manager.manageTeam(); // Output: Alice is managing a team.

// *penggunaan 'instanceof' method
// instanceof -> untuk mengecek apakah sebuah objek merupakan bagian dari sebuah kelas tertentu.
class Animal {}

// Child class inheriting from Animal
class Dog extends Animal {}

// Create instances
let animal = new Animal();
let doggo = new Dog();

// Check if instances belong to certain classes
console.log(animal instanceof Animal); // Output: true
console.log(doggo instanceof Dog); // Output: true

// Check inheritance
console.log(doggo instanceof Animal); // Output: true, because Dog inherits from Animal
console.log(animal instanceof Dog); // Output: false, because Animal does not inherit from Dog
