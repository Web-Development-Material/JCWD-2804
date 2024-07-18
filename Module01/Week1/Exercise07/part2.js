// function getIntersection(obj1, obj2) {
//   // Objek untuk menyimpan hasil intersection
//   const intersection = {};

//   // Loop melalui setiap kunci pada objek pertama (obj1)
//   for (let key1 in obj1) {
//     // Variabel untuk menandai apakah kunci yang sama ditemukan di objek kedua (obj2)
//     let found = false;

//     // Loop melalui setiap kunci pada objek kedua (obj2)
//     for (let key2 in obj2) {
//       // Jika kunci sama dan nilai kunci tersebut juga sama, tambahkan ke intersection
//       if (key1 === key2 && obj1[key1] === obj2[key2]) {
//         intersection[key1] = obj1[key1];
//         found = true;
//         // Keluar dari loop karena kunci yang cocok sudah ditemukan
//         break;
//       }
//     }

//     // Jika kunci tidak ditemukan di objek kedua, hapus kunci tersebut dari intersection
//     if (!found) {
//       delete intersection[key1];
//     }
//   }

//   // Mengembalikan objek intersection yang berisi kunci dan nilai yang sama di kedua objek
//   return intersection;
// }

// // Contoh penggunaan
// console.log(getIntersection({ a: 1, b: 2 }, { a: 1, c: 3 })); // Output: { a: 1 }
