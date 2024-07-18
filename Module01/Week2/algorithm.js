// -- Solving palindrome problem

function isPalindrome(input) {
  const cleanedInput = removeSpecialCharacters(input).toLowerCase(); // Remove special characters from input and convert to lowercase
  const reversedInput = reverseString(cleanedInput); // Reverse the cleaned input

  console.log("cleaned : ", cleanedInput);
  console.log("reversed : ", reversedInput);

  return cleanedInput === reversedInput; // Check if cleaned input is equal to reversed input
}

function removeSpecialCharacters(input) {
  const regex = /[^\w\s]/g; // Define a regular expression to match special characters

  return input.replace(regex, ""); // Use the regular expression to remove special characters
}

function reverseString(input) {
  const characters = input.split(""); // Convert the input string into an array of characters
  const reversedCharacters = characters.reverse(); // Reverse the array of characters

  return reversedCharacters.join(""); // Convert the reversed array back into a string
}

// Example usage
const input = "Katak";
const output = isPalindrome(input);
console.log(output);

// -- Example case of Time Complexity and Space Complexity
function containsDuplicate(nums) {
  let operations = 0; // Hitungan operasi
  let space = 0; // Hitungan ruang tambahan

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      operations++; // Hitungan operasi untuk setiap perbandingan
      if (nums[i] === nums[j]) {
        space++; // Hitungan ruang tambahan jika ada duplikat
        return {
          duplicateStatus: true,
          operations: operations,
          space: space,
        }; // Found a duplicate
      }
    }
  }

  return {
    duplicateStatus: false,
    operations: operations,
    space: space,
  }; // No duplicates found
}

// Example usage
const input1 = [1, 2, 3, 4, 5];
const input2 = [1, 2, 3, 4, 1];

console.log(containsDuplicate(input1)); // false
console.log(containsDuplicate(input2)); // true

// -- Brute Force
// case : mencari pasangan barang yang cocok

// *conventional method
function findMatchingItems(shoppingList, money) {
  for (let i = 0; i < shoppingList.length; i++) {
    for (let j = i + 1; j < shoppingList.length; j++) {
      if (shoppingList[i].price + shoppingList[j].price === money) {
        return [shoppingList[i], shoppingList[j]]; // Found the matching items
      }
    }
  }
  return "No matching items found"; // No matching items found
}

// Example usage
const shoppingList = [
  { name: "Milk", price: 2 },
  { name: "Bread", price: 3 },
  { name: "Eggs", price: 1 },
  { name: "Butter", price: 4 },
];
const money = 5;
console.log(findMatchingItems(shoppingList, money)); // Output: [{ name: "Milk", price: 2 }, { name: "Bread", price: 3 }]

// *optimize with extra memory
function findMatchingItems(shoppingList, money) {
  const priceMap = {}; // Objek untuk mencatat harga barang yang sudah diperiksa

  for (let i = 0; i < shoppingList.length; i++) {
    const item = shoppingList[i];
    const complement = money - item.price;

    if (priceMap[complement]) {
      return [priceMap[complement], item]; // Found the matching items
    }

    priceMap[item.price] = item; // Tambahkan harga barang ke objek
  }

  return "No matching items found"; // No matching items found
}

// Example usage
const shoppingList2 = [
  { name: "Milk", price: 2 },
  { name: "Bread", price: 3 },
  { name: "Eggs", price: 1 },
  { name: "Butter", price: 4 },
];
const money2 = 5;
console.log(findMatchingItems(shoppingList2, money2)); // Output: [{ name: "Milk", price: 2 }, { name: "Bread", price: 3 }]

// *optimize without extra memory
function findMatchingItems(shoppingList, money) {
  // Urutkan daftar belanjaan berdasarkan harga
  shoppingList.sort((a, b) => a.price - b.price);

  let left = 0;
  let right = shoppingList.length - 1;

  while (left < right) {
    const total = shoppingList[left].price + shoppingList[right].price;
    if (total === money) {
      return [shoppingList[left], shoppingList[right]]; // Found the matching items
    } else if (total < money) {
      left++; // Jika total kurang dari uang, geser pointer kiri ke kanan
    } else {
      right--; // Jika total lebih dari uang, geser pointer kanan ke kiri
    }
  }

  return "No matching items found"; // No matching items found
}

// Example usage
const shoppingList3 = [
  { name: "Milk", price: 2 },
  { name: "Bread", price: 3 },
  { name: "Eggs", price: 1 },
  { name: "Butter", price: 4 },
];
const money3 = 5;
console.log(findMatchingItems(shoppingList3, money3)); // Output: [{ name: "Milk", price: 2 }, { name: "Bread", price: 3 }]

// -- Search Algorithm
// *Linear Search (case : mencari baju favorit)
function findFavoriteClothes(data, target) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
      return `Favorite clothes found at position ${i + 1} in the data.`;
    }
  }
  return "Favorite clothes not found in the data.";
}

// Example usage
const data = ["Shirt", "Jeans", "T-shirt", "Favorite Clothes", "Jacket"];
const target = "Favorite Clothes";

console.log(findFavoriteClothes(data, target));

// *Binary Search (case : mencari nilai ujian tertentu dalam daftar nilai ujian)
function binarySearchExamScores(scores, targetScore) {
  let start = 0;
  let end = scores.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (scores[mid] === targetScore) {
      return `Nilai ${targetScore} ditemukan pada posisi ke-${mid + 1}.`;
    } else if (scores[mid] < targetScore) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `Nilai ${targetScore} tidak ditemukan dalam daftar nilai.`;
}

// Contoh data nilai ujian (sudah diurutkan)
const examScores = [70, 75, 80, 85, 90, 95, 100];
const targetScore = 85;
console.log(binarySearchExamScores(examScores, targetScore));

// -- Sort Algorithm
function bubbleSort(bookStack) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < bookStack.length - 1; i++) {
      if (bookStack[i].height > bookStack[i + 1].height) {
        // Swap the books
        let temp = bookStack[i];
        bookStack[i] = bookStack[i + 1];
        bookStack[i + 1] = temp;
        swapped = true;
      }
    }
  }

  return bookStack;
}

// Contoh data tumpukan buku (dalam bentuk objek dengan properti tinggi)
const bookStack = [
  { title: "Harry Potter", height: 15 },
  { title: "Lord of the Rings", height: 18 },
  { title: "The Hobbit", height: 12 },
  { title: "Game of Thrones", height: 20 },
];

console.log("Sebelum diurutkan:");
console.log(bookStack);

console.log("\nSetelah diurutkan:");
console.log(bubbleSort(bookStack));

// -- Selection Sort : mengurutkan daftar harga di toko
function selectionSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    // Temukan indeks dari elemen terkecil di subarray yang belum tersortir
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Tukar elemen terkecil dengan elemen pertama di subarray yang belum tersortir
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

// Contoh penggunaan
let productPrices = [30000, 15000, 50000, 10000, 20000, 25000];
console.log("Sebelum disortir:", productPrices);
productPrices = selectionSort(productPrices);
console.log("Sesudah disortir:", productPrices);
