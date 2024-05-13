function climbStairs(n) {
  // Basis dari rekursi: jika n adalah 0 atau 1, maka hanya ada satu cara untuk mendaki tangga
  if (n === 0 || n === 1) {
    return 1;
  }
  // Jika n adalah 2, maka ada dua cara untuk mendaki tangga
  if (n === 2) {
    return 2;
  }

  let prev1 = 1; // Inisialisasi jumlah cara sebelumnya untuk n = 1
  let prev2 = 2; // Inisialisasi jumlah cara sebelumnya untuk n = 2
  let current = 0; // Inisialisasi jumlah cara untuk n saat ini

  // Iterasi dari 3 sampai n untuk menghitung jumlah cara untuk setiap langkah
  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2; // Jumlah cara untuk n saat ini adalah jumlah cara untuk n-1 dan n-2
    prev1 = prev2; // Geser nilai cara sebelumnya untuk n-1 menjadi cara sebelumnya untuk n-2
    prev2 = current; // Geser nilai cara sebelumnya untuk n menjadi cara sebelumnya untuk n-1
  }

  return current; // Mengembalikan jumlah cara untuk mendaki tangga n
}

// Contoh penggunaan
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
