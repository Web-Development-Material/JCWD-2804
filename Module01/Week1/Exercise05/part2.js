// function removeOddNumbers(numbers) {
//   let evenNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }

// // Contoh penggunaan
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = removeOddNumbers(numbers);
// console.log(evenNumbers); // Output: [2, 4, 6]

// --------------------------------------------------------

// function insertIntegers(maxSize, ...integers) {
//   let result = [];
//   let count = 0;
//   for (let i = 0; i < integers.length; i++) {
//     if (count < maxSize) {
//       result[count] = integers[i];
//       count++;
//     } else {
//       break;
//     }
//   }
//   return result;
// }

// // Contoh penggunaan
// let maxSize = 5;
// let integers = [5, 10, 24, 3, 6, 7, 8];
// console.log(insertIntegers(maxSize, ...integers)); // Output: [5, 10, 24, 3, 6]

// --------------------------------------------------------

// function combineArrays(arr1, arr2) {
//   let combinedArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     combinedArray.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     combinedArray.push(arr2[i]);
//   }
//   return combinedArray;
// }

// // Contoh penggunaan
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(combineArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

// --------------------------------------------------------

// function findDuplicates(arr) {
//   let duplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//         duplicates.push(arr[i]);
//       }
//     }
//   }
//   return duplicates;
// }

// // Contoh penggunaan
// let arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(findDuplicates(arr)); // Output: [2, 3, 5]

// --------------------------------------------------------

// function findDifference(arr1, arr2) {
//   let difference = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       difference.push(arr1[i]);
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       difference.push(arr2[i]);
//     }
//   }
//   return difference;
// }

// // Contoh penggunaan
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// console.log(findDifference(arr1, arr2)); // Output: [1, 2, 6, 7]
