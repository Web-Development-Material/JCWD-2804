// function getArrayStats(arr) {
//   // Dapatkan nilai terendah
//   let lowest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < lowest) {
//       lowest = arr[i];
//     }
//   }

//   // Dapatkan nilai tertinggi
//   let highest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > highest) {
//       highest = arr[i];
//     }
//   }

//   // Dapatkan rata-rata
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let average = sum / arr.length;

//   return { lowest, highest, average };
// }

// // Contoh penggunaan
// let arr = [12, 5, 23, 18, 4, 45, 32];
// let { lowest, highest, average } = getArrayStats(arr);
// console.log({ lowest, highest, average });

// --------------------------------------------------------

// function concatenateWords(arr) {
//   if (arr.length === 0) {
//     return "";
//   } else if (arr.length === 1) {
//     return arr[0];
//   } else {
//     let result = "";
//     for (let i = 0; i < arr.length - 1; i++) {
//       result += arr[i] + ",";
//     }
//     result += " and " + arr[arr.length - 1];
//     return result;
//   }
// }

// // Contoh penggunaan
// let arr = ["apple", "banana", "cherry", "date"];
// let concatenated = concatenateWords(arr);
// console.log(concatenated);

// --------------------------------------------------------

// function splitStringIntoArray(str) {
//   let words = [];
//   let word = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       word += str[i];
//     } else {
//       words.push(word);
//       word = "";
//     }
//   }
//   words.push(word);
//   return words;
// }

// // Contoh penggunaan
// let str = "Hello World";
// let wordsArray = splitStringIntoArray(str);
// console.log(wordsArray);

// --------------------------------------------------------

function addUniqueElement(arr, newElement) {
  let isUnique = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === newElement) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    arr.push(newElement);
  }
  return arr;
}

// Contoh penggunaan
let arr1 = [1, 2, 3, 4];
let newElement1 = 4;
console.log(addUniqueElement(arr1, newElement1)); // Output: [1, 2, 3, 4]

let arr2 = [1, 2, 3, 4];
let newElement2 = 7;
console.log(addUniqueElement(arr2, newElement2)); // Output: [1, 2, 3, 4, 7]
