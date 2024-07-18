// function getPrimitiveTypes(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === null || typeof arr[i] !== "object") {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// // Contoh penggunaan
// let arr = [1, [], undefined, {}, "string", {}, []];
// console.log(getPrimitiveTypes(arr)); // Output: [1, undefined, "string"]

// --------------------------------------------------------

// function secondSmallestNumber(numbers) {
//   let smallest = numbers[0];
//   let secondSmallest = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = numbers[i];
//     } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
//       secondSmallest = numbers[i];
//     }
//   }
//   return secondSmallest;
// }

// // Contoh penggunaan
// let numbers = [5, 3, 1, 7, 2, 6];
// console.log(secondSmallestNumber(numbers)); // Output: 2

// --------------------------------------------------------

// function sumNumbers(mixedArray) {
//   let sum = 0;
//   for (let i = 0; i < mixedArray.length; i++) {
//     if (typeof mixedArray[i] === "number") {
//       sum += mixedArray[i];
//     }
//   }
//   return sum;
// }

// // Contoh penggunaan
// let mixedArray = ["3", 1, "string", null, false, undefined, 2];
// console.log(sumNumbers(mixedArray)); // Output: 3

// --------------------------------------------------------

// function sumOfDuplicates(arr) {
//   let sum = 0;
//   let duplicates = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!duplicates[arr[i]]) {
//       duplicates[arr[i]] = 1;
//     } else {
//       duplicates[arr[i]]++;
//     }
//   }

//   // Menghitung jumlah nilai yang duplikat
//   for (let key in duplicates) {
//     if (duplicates[key] > 1) {
//       sum += parseInt(key) * duplicates[key];
//     }
//   }

//   return sum;
// }

// // Contoh penggunaan
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// console.log(sumOfDuplicates(arr)); // Output: 40

// --------------------------------------------------------

// function rockPaperScissors(playerThrow) {
//   const throws = ["rock", "paper", "scissor"];
//   const randomIndex = Math.floor(Math.random() * throws.length);
//   const computerThrow = throws[randomIndex];

//   switch (playerThrow) {
//     case "rock":
//       switch (computerThrow) {
//         case "rock":
//           return "Draw";
//         case "paper":
//           return "Lose";
//         case "scissor":
//           return "Win";
//       }
//       break;
//     case "paper":
//       switch (computerThrow) {
//         case "rock":
//           return "Win";
//         case "paper":
//           return "Draw";
//         case "scissor":
//           return "Lose";
//       }
//       break;
//     case "scissor":
//       switch (computerThrow) {
//         case "rock":
//           return "Lose";
//         case "paper":
//           return "Win";
//         case "scissor":
//           return "Draw";
//       }
//       break;
//     default:
//       return "Invalid throw";
//   }
// }

// // Contoh penggunaan
// let playerThrow = "rock";
// console.log(rockPaperScissors(playerThrow)); // Output: 'Win' atau 'Draw' atau 'Lose'
