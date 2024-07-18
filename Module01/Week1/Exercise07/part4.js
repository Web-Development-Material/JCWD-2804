// function switchPropertiesAndValuesWithBuiltIn(inputArray) {
//   // Menggunakan method map untuk membuat array baru dengan transformasi nilai
//   return inputArray.map((obj) => {
//     // Menggunakan method Object.entries untuk mendapatkan array berisi [key, value] dari objek
//     return Object.entries(obj).reduce((acc, [key, value]) => {
//       // Menukar key dan value dalam objek baru
//       acc[value] = key;
//       return acc;
//     }, {});
//   });
// }

// // Contoh penggunaan
// const inputArray = [{ name: "David", age: 20 }];
// const outputWithBuiltIn = switchPropertiesAndValuesWithBuiltIn(inputArray);
// console.log(outputWithBuiltIn);

// ------------------------------------------------------------------------------------------------

// function switchPropertiesAndValuesWithoutBuiltIn(inputArray) {
//   const result = [];

//   // Loop melalui setiap objek dalam array inputArray
//   for (let i = 0; i < inputArray.length; i++) {
//     const obj = inputArray[i];
//     const newObj = {};

//     // Loop melalui setiap properti objek dan menukar key dan value
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         newObj[obj[key]] = key;
//       }
//     }

//     // Menambahkan objek yang sudah ditukar ke dalam array result
//     result.push(newObj);
//   }

//   return result;
// }

// // Contoh penggunaan
// const inputArray = [{ name: "David", age: 20 }];
// const outputWithoutBuiltIn =
//   switchPropertiesAndValuesWithoutBuiltIn(inputArray);
// console.log(outputWithoutBuiltIn);
