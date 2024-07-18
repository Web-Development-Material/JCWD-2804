// function isEqual(obj1, obj2) {
//   // Mengambil kunci (properti) dari setiap objek
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   // Memeriksa apakah jumlah kunci sama
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   // Memeriksa setiap kunci dan nilainya
//   for (let key of keys1) {
//     // Jika nilai dari kedua objek tidak sama, return false
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   // Jika semua kunci dan nilainya sama, return true
//   return true;
// }

// // Contoh penggunaan
// console.log(isEqual({ a: 2 }, { a: 1 })); // Output: false
// console.log(isEqual({ a: "Hello" }, { a: 1 })); // Output: false
// console.log(isEqual({ a: 1 }, { a: 1 })); // Output: true
