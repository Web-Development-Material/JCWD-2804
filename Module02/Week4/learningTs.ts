// Slide 1 : Contoh tipe data primitive
let num: number = 42;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;

console.log("Number:", num); // Output: Number: 42
console.log("String:", str); // Output: String: Hello, TypeScript!
console.log("Boolean:", bool); // Output: Boolean: true
console.log("Null:", n); // Output: Null: null
console.log("Undefined:", u); // Output: Undefined: undefined

// Any data type
let anything: any = "This can be anything";
console.log("Any (string):", anything); // Output: Any (string): This can be anything

anything = 100;
console.log("Any (number):", anything); // Output: Any (number): 100

anything = { key: "value" };
console.log("Any (object):", anything); // Output: Any (object): { key: 'value' }

// Union data types
let multiType: number | string;
multiType = 50;
console.log("Union (number):", multiType); // Output: Union (number): 50

multiType = "Fifty";
console.log("Union (string):", multiType); // Output: Union (string): Fifty

// Fungsi dengan tipe parameter union
function printId(id: number | string): void {
  console.log("Your ID is:", id);
}

printId(123); // Output: Your ID is: 123
printId("abc123"); // Output: Your ID is: abc123

// Fungsi dengan tipe return union
function getRandomValue(): number | boolean {
  return Math.random() > 0.5 ? 42 : false;
}

let randomValue = getRandomValue();
console.log("Random value:", randomValue);

// ----------------------------------------------------------------
// Slide 2 : Deklarasi variabel dan fungsi
let age: number = 30;
let username: string = "John Doe";
let isStudent: boolean = true;

console.log("Age:", age); // Output: Age: 30
console.log("username:", username); // Output: username: John Doe
console.log("Is Student:", isStudent); // Output: Is Student: true

// Deklarasi fungsi dengan tipe parameter dan tipe return
function add(x: number, y: number): number {
  return x + y;
}

let sum: number = add(10, 20);
console.log("Sum:", sum); // Output: Sum: 30

function greet(name: string): string {
  return `Hello, ${name}!`;
}

let greeting: string = greet("Bagas");
console.log("Greeting:", greeting); // Output: Greeting: Hello, Bagas!

function isAdult(age: number): boolean {
  return age >= 18;
}

let adultCheck: boolean = isAdult(25);
console.log("Is Adult:", adultCheck); // Output: Is Adult: true

// Deklarasi fungsi tanpa nilai return (void)
function logMessage(message: string): void {
  console.log("Message:", message);
}

logMessage("This is a message."); // Output: Message: This is a message.

// ----------------------------------------------------------------
// Slide 3 : Tipe data lanjutan

// Array data type with syntax <Array>
let numbers: Array<number> = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

console.log("Numbers:", numbers); // Output: Numbers: [1, 2, 3, 4, 5]
console.log("Names:", names); // Output: Names: ["Alice", "Bob", "Charlie"]

// Tuple data type
let person: [string, number];
person = ["Alice", 25]; // OK
// person = [25, "Alice"]; // Error: Type 'number' is not assignable to type 'string'.

console.log("Person:", person); // Output: Person: ["Alice", 25]

// Enum data type
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Green;
console.log("Favorite Color:", favoriteColor); // Output: Favorite Color: 1 (index of Green in enum)

// Enum with custom values
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

let currentStatus: Status = Status.Active;
console.log("Current Status:", currentStatus); // Output: Current Status: ACTIVE

// Object data type using explicit type annotation
let student: {
  name: string;
  age: number;
  isGraduated: boolean;
} = {
  name: "Bob",
  age: 22,
  isGraduated: false,
};

console.log("Student:", student);
// Output: Student: { name: "Bob", age: 22, isGraduated: false }

let anotherStudent: {
  name: string;
  age: number;
  isGraduated: boolean;
} = {
  name: "Alice",
  age: 24,
  isGraduated: true,
};

console.log("Another Student:", anotherStudent);
// Output: Another Student: { name: "Alice", age: 24, isGraduated: true }

// Object data type using Object
let personObj: Object = {
  name: "Charlie",
  age: 28,
  isEmployed: true,
};

console.log("Person Object:", personObj);
// Output: Person Object: { name: "Charlie", age: 28, isEmployed: true }

// ----------------------------------------------------------------
// Slide 4 : OOP, Inheritance, Implementation

// Menggunakan 'type' untuk alias tipe primitif, union, dan intersection
type ID = number | string;

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  id: ID;
  name: string;
  age: number;
} & Address;

// Menggunakan 'interface' untuk inheritance dan implementasi
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

class PetDog implements Dog {
  name: string;
  age: number;
  breed: string;

  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} barks! Woof! Woof!`);
  }
}

// Penggunaan 'type' dan 'interface' dalam aplikasi
const person: Person = {
  id: 1,
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Wonderland",
  country: "Fantasy",
};

console.log("Person:", person);
// Output: Person: { id: 1, name: "Alice", age: 30, street: "123 Main St", city: "Wonderland", country: "Fantasy" }

const myDog: PetDog = new PetDog("Buddy", 3, "Golden Retriever");
myDog.bark();
// Output: Buddy barks! Woof! Woof!

// Contoh penggunaan 'type' dengan union
type Result = Success | Failure;

type Success = {
  status: "success";
  data: string;
};

type Failure = {
  status: "failure";
  error: string;
};

function handleResult(result: Result): void {
  if (result.status === "success") {
    console.log("Success:", result.data);
  } else {
    console.log("Failure:", result.error);
  }
}

function generateRandomResult(): Result {
  const randomValue = Math.random() * 10; // Menghasilkan nilai antara 0 dan 9.9999
  if (randomValue < 5) {
    // Misalnya, kita anggap nilai kurang dari 5 sebagai 'success'
    return {
      status: "success",
      data: "Operation was successful",
    };
  } else {
    // Nilai 5 atau lebih dianggap sebagai 'failure'
    return {
      status: "failure",
      error: "Something went wrong",
    };
  }
}

const randomResult: Result = generateRandomResult();
handleResult(randomResult);
