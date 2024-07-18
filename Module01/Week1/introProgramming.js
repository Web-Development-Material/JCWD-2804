// --- untuk mencetak string di javascript
console.log("Hello World");

// -- Variable Declaration

// var: Digunakan untuk membuat variabel yang bisa diakses dari mana pun dalam program (variabel global). Namun, variabel var dapat ditimpa (replaced) dengan nilai baru di mana saja dalam program.
// let: Digunakan untuk membuat variabel yang hanya bisa diakses di dalam blok kode tertentu (variabel lokal). Variabel let dapat diubah nilainya, artinya nilainya dapat diperbarui di dalam blok tempat variabel tersebut dideklarasikan.
// const: Digunakan untuk membuat variabel yang nilainya tidak dapat diubah setelah pertama kali diinisialisasi. Variabel const juga bersifat lokal, hanya bisa diakses di dalam blok tempat variabel tersebut dideklarasikan, dan tidak bisa dideklarasikan ulang di dalam blok yang sama.

// *penggunaan var :
var a = 5;
function example() {
  var b = 10;
  console.log(a); // Output: 5
}
console.log(b); // Output: ReferenceError: b is not defined

// *penggunaan let :
let c = 15;
if (true) {
  let d = 20;
  console.log(c); // Output: 15
  console.log(d); // Output: 20
}
console.log(d); // Output: ReferenceError: d is not defined

// *penggunaan const :
const e = 25;
e = 30; // Error: Assignment to constant variable

// -- Data Types
// -- Primitive types

let name = "John Doe"; // string
let age = 30; // number
let isActive = true; // boolean
let address; // undefined : since no value is assigned, it is automatically undefined
let job = null; // null : is an intentional absence of any value
let balance = 1000000000000000000000n; // BigInt : is used for integers larger than 2^53 - 1

// Logging the variables
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Active:", isActive);
console.log("Address:", address);
console.log("Job:", job);
console.log("Balance:", balance);

// Logging the types
console.log("Type of Name:", typeof name);
console.log("Type of Age:", typeof age);
console.log("Type of Is Active:", typeof isActive);
console.log("Type of Address:", typeof address);
console.log("Type of Job:", typeof job);
console.log("Type of Balance:", typeof balance);

// -- Collection types

// Array (Kumpulan Nilai)
let colors = ["red", "green", "blue"]; // Array of strings
let count = [1, 2, 3, 4, 5]; // Array of numbers
let mixed = ["apple", 3, true]; // Array of mixed types

// Object (Kumpulan Pasangan Key-Value)
let people = { name: "John", age: 30, city: "New York" }; // Object representing a person
let car = { brand: "Toyota", model: "Camry", year: 2022 }; // Object representing a car

// Nesting Array
let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Nested Array Example:");
console.log(nestedArray[0][1]); // Output: 2 (mengakses elemen kedua dari array pertama)
console.log(nestedArray[2][0]); // Output: 7 (mengakses elemen pertama dari array ketiga)

// Nesting Object
let nestedObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
  },
};

console.log("\nNested Object Example:");
console.log(nestedObject.name); // Output: John (mengakses properti name dari objek)
console.log(nestedObject.address.city); // Output: New York (mengakses properti city dari objek address)

// Nesting Object x Array
let data = {
  name: "John",
  age: 30,
  hobbies: ["reading", "painting", "hiking"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
  },
  friends: [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 32 },
  ],
};

console.log("Name:", data.name);
console.log("Age:", data.age);
console.log("Hobbies:", data.hobbies.join(", "));
console.log("Street:", data.address.street);
console.log("City:", data.address.city);
console.log("Zip:", data.address.zip);
console.log("Friends:");
data.friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend.name}, Age: ${friend.age}`);
});

// *perbedaan foreach dan map
// foreach -> Bayangkan Anda sedang menyapu lantai dan melewati setiap ubin satu per satu. Anda bisa melihat setiap ubin dan melakukan sesuatu pada ubin tersebut, misalnya membersihkannya. Namun, Anda tidak mengubah ubin itu sendiri, hanya melakukan tindakan di atasnya.
// map -> Bayangkan Anda memiliki kantong kosong dan Anda meletakkan sesuatu di setiap kantong-kantong baru. Setelah selesai, Anda memiliki kantong-kantong baru dengan barang-barang di dalamnya. map melakukan hal yang sama pada array, membuat array baru berdasarkan array yang ada.

// *contoh foreach
let countNumber = [1, 2, 3, 4, 5];
countNumber.forEach((number) => {
  console.log(number * 2); // Menggandakan setiap nomor
});

// *contoh map
let countMixed = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// -- Mutable VS Immutable

// *contoh object mutable
let person = { name: "John", age: 30 };
person.age = 31; // Mengubah nilai properti age
console.log(person); // Output: { name: "John", age: 31 }

// *contoh array mutable
let numbers = [1, 2, 3, 4];
numbers.push(5); // Menambahkan nilai ke dalam array
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// -- Basic Operator

let sum = 5 + 3; // 8
let difference = 10 - 5; // 5
let product = 4 * 6; // 24
let quotient = 20 / 4; // 5
let remainder = 10 % 3; // 1
let exponent = 2 ** 3; // 8 (2 pangkat 3)

// -- Prefix and Postfix (Increment x Decrement)
let x = 5;
let y = 10;

// Increment Prefix: Nilai x ditingkatkan terlebih dahulu, kemudian digunakan
let incrementPrefix = ++x; // x sekarang bernilai 6, incrementPrefix = 6

// Increment Postfix: Nilai y digunakan terlebih dahulu, kemudian ditingkatkan
let incrementPostfix = y++; // incrementPostfix = 10, y sekarang bernilai 11

// Decrement Prefix: Nilai x dikurangi terlebih dahulu, kemudian digunakan
let decrementPrefix = --x; // x sekarang bernilai 5, decrementPrefix = 5

// Decrement Postfix: Nilai y digunakan terlebih dahulu, kemudian dikurangi
let decrementPostfix = y--; // decrementPostfix = 11, y sekarang bernilai 10

console.log("Increment Prefix:", incrementPrefix);
console.log("Increment Postfix:", incrementPostfix);
console.log("Decrement Prefix:", decrementPrefix);
console.log("Decrement Postfix:", decrementPostfix);

// -- Comparison Operators
let a = 5;
let b = 10;

// Memeriksa kesamaan nilai (==)
console.log(a == b); // Output: false

// Memeriksa kesamaan nilai dan tipe data (===)
console.log(a === "5"); // Output: false

// Memeriksa ketidaksamaan nilai (!=)
console.log(a != b); // Output: true

// Memeriksa ketidaksamaan nilai atau tipe data (!==)
console.log(a !== "5"); // Output: true

// Memeriksa apakah a lebih besar dari b (>)
console.log(a > b); // Output: false

// Memeriksa apakah a lebih kecil dari b (<)
console.log(a < b); // Output: true

// Memeriksa apakah a lebih besar dari atau sama dengan b (>=)
console.log(a >= 5); // Output: true

// Memeriksa apakah a lebih kecil dari atau sama dengan b (<=)
console.log(b <= 10); // Output: true
