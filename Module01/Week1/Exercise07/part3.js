// function mergeStudentDataWithoutBuiltIn(array1, array2) {
//   // Inisialisasi array untuk menyimpan hasil penggabungan
//   const mergedArray = [];
//   // Inisialisasi array untuk menyimpan nama unik
//   const uniqueNames = [];

//   // Loop melalui array1 untuk menggabungkan data dan menyimpan nama unik
//   array1.forEach((item) => {
//     // Jika nama belum ada dalam uniqueNames, tambahkan nama ke uniqueNames dan tambahkan item ke mergedArray
//     if (!uniqueNames.includes(item.name)) {
//       uniqueNames.push(item.name);
//       mergedArray.push(item);
//     }
//   });

//   // Lakukan hal yang sama untuk array2
//   array2.forEach((item) => {
//     if (!uniqueNames.includes(item.name)) {
//       uniqueNames.push(item.name);
//       mergedArray.push(item);
//     }
//   });

//   // Kembalikan hasil penggabungan
//   return mergedArray;
// }

// // Contoh penggunaan
// const array1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];
// const array2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];
// const resultWithoutBuiltIn = mergeStudentDataWithoutBuiltIn(array1, array2);
// console.log(resultWithoutBuiltIn);

// ------------------------------------------------------------------------------------------------

// function mergeStudentDataWithBuiltIn(array1, array2) {
//     // Menggabungkan array1 dan array2 menggunakan spread operator
//     const mergedArray = [...array1, ...array2];
//     // Menghilangkan data duplikat dengan menggunakan reduce
//     const uniqueArray = mergedArray.reduce((acc, current) => {
//       // Memeriksa apakah item sudah ada di accumulator (acc)
//       const isExist = acc.some(
//         (item) => item.name === current.name && item.email === current.email
//       );
//       // Jika item belum ada, tambahkan ke accumulator
//       if (!isExist) {
//         acc.push(current);
//       }
//       return acc;
//     }, []);
//     // Mengembalikan array dengan data unik
//     return uniqueArray;
//   }

// // Contoh penggunaan
// const array1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];
// const array2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];

// const resultWithBuiltIn = mergeStudentDataWithBuiltIn(array1, array2);
// console.log(resultWithBuiltIn);
