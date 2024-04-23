// --- Conditional Statements

let temperature = 25;
let isRaining = true;
let time = "pagi";

// Kondisional if
if (temperature > 30) {
  console.log("Luar biasa panas!");
}

// Kondisional if-else
if (isRaining) {
  console.log("Bawa payung!");
} else {
  console.log("Tidak perlu bawa payung.");
}

// Nested if
if (time === "pagi") {
  if (temperature < 20) {
    console.log("Sangat sejuk di pagi hari.");
  } else {
    console.log("Agak panas di pagi hari.");
  }
}

// Kondisional if-else if
if (time === "sore") {
  console.log("Selamat sore!");
} else if (time === "siang") {
  console.log("Selamat siang!");
} else {
  console.log("Selamat pagi!");
}

// Chaining conditions dengan if-else
if (temperature > 30 && !isRaining) {
  console.log("Hari ini sangat panas dan tidak hujan.");
} else if (temperature > 30 && isRaining) {
  console.log("Hari ini sangat panas namun sedang hujan.");
} else if (temperature <= 30 && isRaining) {
  console.log("Hari ini tidak terlalu panas namun sedang hujan.");
} else {
  console.log("Hari ini tidak terlalu panas dan tidak hujan.");
}

// Switch Case (contoh 1)
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Minggu";
    break;
  case 2:
    dayName = "Senin";
    break;
  case 3:
    dayName = "Selasa";
    break;
  case 4:
    dayName = "Rabu";
    break;
  case 5:
    dayName = "Kamis";
    break;
  case 6:
    dayName = "Jumat";
    break;
  case 7:
    dayName = "Sabtu";
    break;
  default:
    dayName = "Hari tidak valid";
}

console.log("Hari ini adalah " + dayName);

// Switch Case (contoh 2)
let role = "admin";
let message;

switch (role) {
  case "admin":
    message = "Anda memiliki akses penuh.";
    break;
  case "editor":
    message = "Anda memiliki akses untuk mengedit konten.";
    break;
  case "viewer":
    message = "Anda memiliki akses untuk melihat konten.";
    break;
  default:
    message = "Peran tidak dikenali.";
}

console.log("Pesan: " + message);

// -- Logical Operator

// *AND
// true + true = true
// true + false = false
// false + false = false

// *OR
// true + true = true
// true + false = true
// false + false = false

// *NOT
// !true = false
// !false = true

// -- Ternary Operator

// *Single Ternary
let age = 20;
let isAdult = age >= 18 ? "Dewasa" : "Belum dewasa";

console.log("Status: " + isAdult); // Output: "Status: Dewasa"

// *Nested Ternary
let marks = 75;
let result = marks >= 80 ? "A" : marks >= 70 ? "B" : marks >= 60 ? "C" : "D";

console.log("Nilai: " + result); // Output: "Nilai: B"

// -- LOOP STATEMENT

// *Looping for
for (let i = 0; i < 5; i++) {
  console.log("Iterasi ke-" + (i + 1));
}

// *Nested looping for
for (let i = 1; i <= 3; i++) {
  console.log("Iterasi pertama ke-" + i);
  for (let j = 1; j <= 2; j++) {
    console.log("  Iterasi kedua ke-" + j);
  }
}

// *Looping while
let x = 0;
while (x < 5) {
  console.log("Iterasi ke-" + (x + 1));
  x++;
}

// *Looping nested while
let y = 1;
while (y <= 3) {
  console.log("Iterasi pertama ke-" + y);
  let z = 1;
  while (z <= 2) {
    console.log("  Iterasi kedua ke-" + z);
    z++;
  }
  y++;
}

// *Break
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("Iterasi ke-" + (i + 1));
}

// *Continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log("Iterasi ke-" + (i + 1));
}
