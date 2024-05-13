// function factorialWithRecursionBuiltIn(num) {
//   // Base case: jika num adalah 0, kembalikan 1
//   if (num === 0) {
//     return 1;
//   } else {
//     // Rekursif: kembalikan num dikali dengan faktorial dari num - 1
//     return num * factorialWithRecursionBuiltIn(num - 1);
//   }
// }

// // Contoh penggunaan
// const input = 5;
// const outputWithRecursionBuiltIn = factorialWithRecursionBuiltIn(input);
// console.log(`${input}! = ${outputWithRecursionBuiltIn}`);

// ------------------------------------------------------------------------------------------------

// function factorialWithoutRecursionBuiltIn(num) {
//   // Base case: jika num adalah 0 atau 1, kembalikan 1
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     let result = 1;
//     // Loop dari num hingga 1, dan kalkulasi faktorial secara iteratif
//     for (let i = num; i >= 1; i--) {
//       result *= i;
//     }
//     return result;
//   }
// }

// // Contoh penggunaan
// const input = 5;
// const outputWithoutRecursionBuiltIn = factorialWithoutRecursionBuiltIn(input);
// console.log(`${input}! = ${outputWithoutRecursionBuiltIn}`);
