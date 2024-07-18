// -- Array

let myArray1 = []; // deklarasi dengan nilai awal kosong
let myArray2 = [1, 2, 3, 4, 5]; // deklarasi dengan nilai awal
myArray3 = ["apple", "banana", "orange"]; // deklarasi tanpa kata kunci let
let myArray4 = new Array(); // deklarasi dengan constructor Array()
let myArray5 = new Array(3); // deklarasi dengan constructor Array() dan nilai awal

// *contoh nested array object
let students = [
  {
    name: "John Doe",
    age: 20,
    subjects: ["Math", "Science", "History"],
  },
  {
    name: "Jane Smith",
    age: 22,
    subjects: ["English", "Art"],
  },
  {
    name: "Alice Johnson",
    age: 21,
    subjects: ["Computer Science", "Physics"],
  },
];

// Menampilkan nama-nama mahasiswa
console.log("Daftar Mahasiswa:");
students.forEach((student) => {
  console.log("- " + student.name);
});

// Menampilkan mata pelajaran yang diambil oleh setiap mahasiswa
console.log("\nMata Pelajaran Mahasiswa:");
students.forEach((student) => {
  console.log(student.name + " mengambil mata pelajaran:");
  student.subjects.forEach((subject) => {
    console.log("  - " + subject);
  });
});

// *penggunaan shift, unshift, pop dan push

let fruits = ["Apple", "Banana", "Orange"];

// Menggunakan unshift untuk menambahkan elemen di awal array
fruits.unshift("Mango");
console.log(fruits); // Output: ["Mango", "Apple", "Banana", "Orange"]

// Menggunakan push untuk menambahkan elemen di akhir array
fruits.push("Grapes");
console.log(fruits); // Output: ["Mango", "Apple", "Banana", "Orange", "Grapes"]

// Menggunakan shift untuk menghapus elemen di awal array
let shiftedFruit = fruits.shift();
console.log(shiftedFruit); // Output: "Mango"
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grapes"]

// Menggunakan pop untuk menghapus elemen di akhir array
let poppedFruit = fruits.pop();
console.log(poppedFruit); // Output: "Grapes"
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// *penggunaan for in
// for in -> digunakan untuk mengulang melalui properti-properti enumerable dari sebuah objek.
let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// *penggunaan for of
// for of -> digunakan untuk mengulang melalui elemen-elemen iterable seperti array.
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// -- Function
// -- function itu seperti resep kue, kita bisa menggunakan resep yang sama untuk membuat banyak kue tanpa harus menulis ulang langkah-langkahnya.

// *function declaration

// *case 1 : menentukan bilangan ganjil atau genap
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

console.log(checkEvenOdd(5)); // Output: Ganjil
console.log(checkEvenOdd(10)); // Output: Genap

// *case 2 : menghitung luas segitiga
function calculateTriangleArea(base, height) {
  return 0.5 * base * height;
}
console.log(calculateTriangleArea(5, 10)); // Output: 25

// *case 3 : menyapa user berdasarkan waktu
function greetUser(time) {
  if (time < 12) {
    return "Selamat pagi!";
  } else if (time < 18) {
    return "Selamat siang!";
  } else {
    return "Selamat malam!";
  }
}

console.log(greetUser(9)); // Output: Selamat pagi!
console.log(greetUser(15)); // Output: Selamat siang!

// *function expressions
// -- penggunaan fungsi sebagai argumen atau pengembalian fungsi dari fungsi lain.

let calculate = function (num1, num2, operation) {
  return operation(num1, num2);
};

let add = function (a, b) {
  return a + b;
};

let subtract = function (a, b) {
  return a - b;
};

console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, subtract)); // Output: 2

// *nested functions
function calculateTotalPrice(price, quantity, customerType) {
  function calculateDiscount(totalPrice) {
    if (customerType === "member") {
      return totalPrice * 0.9; // 10% discount for members
    } else {
      return totalPrice; // No discount for non-members
    }
  }

  let totalPrice = price * quantity;
  let discountedPrice = calculateDiscount(totalPrice);

  return discountedPrice;
}

let totalPrice = calculateTotalPrice(50000, 3, "member");
console.log("Total price after discount: " + totalPrice);

// *closure

// Closure adalah kombinasi antara fungsi dan lingkungannya (lexical environment) di mana fungsi tersebut didefinisikan.
// Closure memungkinkan fungsi tersebut mengakses variabel di lingkungan luar (outer scope) meskipun fungsi tersebut dipanggil di lingkungan yang berbeda di mana variabel tersebut tidak lagi ada.

function createPerson(name, age) {
  let person = {
    name: name,
    age: age,
  };

  function changeName(newName) {
    person.name = newName;
  }

  function birthday() {
    person.age++;
  }

  function getPersonInfo() {
    return "Name: " + person.name + ", Age: " + person.age;
  }

  return { changeName, birthday, getPersonInfo };
}

let person1 = createPerson("Alice", 30);
console.log(person1.getPersonInfo()); // Output: Name: Alice, Age: 30

person1.changeName("Bob");
person1.birthday();
console.log(person1.getPersonInfo()); // Output: Name: Bob, Age: 31

// *currying
// Currying adalah teknik dalam pemrograman fungsional di mana sebuah fungsi dengan beberapa parameter diubah menjadi rangkaian dari fungsi-fungsi yang menerima satu parameter.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertTemperature(unit) {
  return function (temperature) {
    if (unit === "C") {
      return celsiusToFahrenheit(temperature);
    } else if (unit === "F") {
      return temperature; // Jika sudah dalam Fahrenheit, kembalikan nilainya
    } else {
      return "Unit tidak valid";
    }
  };
}

let toFahrenheit = convertTemperature("C");
console.log(toFahrenheit(25)); // Output: 77

// *rekursif
// Rekursif adalah teknik di dalam pemrograman di mana sebuah fungsi memanggil dirinya sendiri sebagai bagian dari prosesnya.

// contoh 1 : penghitungan pangkat

function power(base, exponent) {
  // Base case: jika eksponen adalah 0, hasilnya adalah 1
  if (exponent === 0) {
    return 1;
  }
  // Rekursif: pangkat = base * pangkat(base, eksponen-1)
  else {
    return base * power(base, exponent - 1);
  }
}

// Contoh penggunaan: menghitung 2 pangkat 5
let res1 = power(2, 5);
console.log(res1); // Output: 32 (2^5 = 32)

// contoh 2 : mencari faktorial

function factorial(n) {
  // Base case: jika n adalah 0, maka faktorialnya adalah 1
  if (n === 0) {
    return 1;
  }
  // Rekursif: n! = n * (n-1)!
  else {
    return n * factorial(n - 1);
  }
}

// Contoh penggunaan: menghitung faktorial dari 5
let res2 = factorial(5);
console.log(res2); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

// contoh 3 : perhitungan bilangan fibonacci

function fibonacci(n) {
  // Base case: jika n adalah 0 atau 1, nilainya adalah n
  if (n === 0 || n === 1) {
    return n;
  }
  // Rekursif: nilai fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Contoh penggunaan: mencari nilai fibonacci ke-6 (deret dimulai dari 0)
let result = fibonacci(6);
console.log(result); // Output: 8 (0, 1, 1, 2, 3, 5, 8)

// -- Predefined Function
// Predefined functions (fungsi bawaan) dalam JavaScript adalah fungsi yang sudah disediakan oleh bahasa itu sendiri dan dapat digunakan tanpa perlu mendefinisikannya sendiri.

// isFinite -> fungsi ini digunakan untuk menentukan apakah nilai yang diberikan merupakan bilangan terbatas (finite) atau bukan.
// isNan -> fungsi ini digunakan untuk menentukan apakah nilai yang diberikan adalah "Not-a-Number" (NaN) atau bukan.
// parseFloat -> fungsi ini digunakan untuk mengubah string menjadi bilangan desimal (float).
// parseInt -> fungsi ini digunakan untuk mengubah string menjadi bilangan bulat (integer).

// cek isFinite
console.log(isFinite(10)); // Output: true
console.log(isFinite(Infinity)); // Output: false

// cek isNan
console.log(isNaN(10)); // Output: false
console.log(isNaN("Hello")); // Output: true

// cek parseFloat
console.log(parseFloat("10.5")); // Output: 10.5
console.log(parseFloat("20 years old")); // Output: 20

// cek parseInt
console.log(parseInt("10")); // Output: 10
console.log(parseInt("10.5")); // Output: 10
console.log(parseInt("20 years old")); // Output: 20
