// function calculateStudentData(students) {
//   let scoreSum = 0;
//   let ageSum = 0;
//   let scoreHighest = -Infinity;
//   let scoreLowest = Infinity;
//   let ageHighest = new Date(0);
//   let ageLowest = new Date();

//   for (let i = 0; i < students.length; i++) {
//     scoreSum += students[i].Score;
//     ageSum += students[i].Age.getTime();

//     if (students[i].Score > scoreHighest) {
//       scoreHighest = students[i].Score;
//     }

//     if (students[i].Score < scoreLowest) {
//       scoreLowest = students[i].Score;
//     }

//     if (students[i].Age.getTime() > ageHighest.getTime()) {
//       ageHighest = students[i].Age;
//     }

//     if (students[i].Age.getTime() < ageLowest.getTime()) {
//       ageLowest = students[i].Age;
//     }
//   }

//   const scoreAverage = scoreSum / students.length;
//   const ageAverage = new Date(ageSum / students.length);

//   return {
//     Score: {
//       Highest: scoreHighest,
//       Lowest: scoreLowest,
//       Average: scoreAverage,
//     },
//     Age: {
//       Highest: ageHighest.toDateString(), // Mengubah format tanggal
//       Lowest: ageLowest.toDateString(), // Mengubah format tanggal
//       Average: ageAverage.toDateString(), // Mengubah format tanggal
//     },
//   };
// }

// // Contoh penggunaan
// const students = [
//   {
//     Name: "Alice",
//     Email: "alice@example.com",
//     Age: new Date("2000-01-01"),
//     Score: 85,
//   },
//   {
//     Name: "Bob",
//     Email: "bob@example.com",
//     Age: new Date("1999-05-15"),
//     Score: 90,
//   },
//   {
//     Name: "Charlie",
//     Email: "charlie@example.com",
//     Age: new Date("2001-07-20"),
//     Score: 78,
//   },
//   {
//     Name: "David",
//     Email: "david@example.com",
//     Age: new Date("2000-10-10"),
//     Score: 95,
//   },
// ];

// const result = calculateStudentData(students);
// console.log(result);

// ------------------------------------------------------------------------------

// function calculateStudentData(students) {
//   // Mendapatkan array nilai Score dari semua mahasiswa
//   const scores = students.map((student) => student.Score);
//   // Mendapatkan array nilai Age (dalam bentuk timestamp) dari semua mahasiswa
//   const ages = students.map((student) => student.Age.getTime());

//   // Menghitung nilai tertinggi, terendah, dan rata-rata dari nilai Score
//   const scoreHighest = Math.max(...scores);
//   const scoreLowest = Math.min(...scores);
//   const scoreAverage =
//     scores.reduce((acc, curr) => acc + curr, 0) / students.length;

//   // Menghitung nilai tertinggi, terendah, dan rata-rata dari nilai Age
//   const ageHighest = new Date(Math.max(...ages));
//   const ageLowest = new Date(Math.min(...ages));
//   const ageAverage = new Date(
//     ages.reduce((acc, curr) => acc + curr, 0) / students.length
//   );

//   // Mengembalikan objek yang berisi data statistik
//   return {
//     Score: {
//       Highest: scoreHighest,
//       Lowest: scoreLowest,
//       Average: scoreAverage,
//     },
//     Age: {
//       Highest: ageHighest.toDateString(),
//       Lowest: ageLowest.toDateString(),
//       Average: ageAverage.toDateString(),
//     },
//   };
// }

// // Contoh penggunaan
// const students = [
//   {
//     Name: "Alice",
//     Email: "alice@example.com",
//     Age: new Date("2000-01-01"),
//     Score: 85,
//   },
//   {
//     Name: "Bob",
//     Email: "bob@example.com",
//     Age: new Date("1999-05-15"),
//     Score: 90,
//   },
//   {
//     Name: "Charlie",
//     Email: "charlie@example.com",
//     Age: new Date("2001-07-20"),
//     Score: 78,
//   },
//   {
//     Name: "David",
//     Email: "david@example.com",
//     Age: new Date("2000-10-10"),
//     Score: 95,
//   },
// ];

// const result = calculateStudentData(students);
// console.log(result);
