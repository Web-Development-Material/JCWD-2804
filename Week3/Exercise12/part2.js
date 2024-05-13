function romanToInt(s) {
  // Objek yang mengaitkan setiap karakter Romawi dengan nilainya
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Inisialisasi variabel untuk menyimpan hasil konversi dan nilai sebelumnya
  let result = 0;
  let prevValue = 0;

  // Iterasi mundur melalui string Romawi
  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[s[i]];

    // Jika nilai saat ini lebih kecil dari nilai sebelumnya, kurangi dari hasil
    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      // Jika tidak, tambahkan ke hasil
      result += currentValue;
    }

    // Perbarui nilai sebelumnya
    prevValue = currentValue;
  }

  // Kembalikan hasil konversi
  return result;
}

// Contoh penggunaan
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
