function titleToNumber(title) {
  let result = 0;

  for (let i = 0; i < title.length; i++) {
    // Mengubah huruf menjadi nilai ASCII dan mengurangi nilai ASCII huruf 'A' agar dimulai dari 0
    const charValue = title.charCodeAt(i) - "A".charCodeAt(0) + 1;

    // Menambahkan nilai kolom yang telah dihitung ke dalam hasil dengan perhitungan berbasis 26
    result = result * 26 + charValue;
  }

  return result;
}

// Contoh penggunaan
console.log(titleToNumber("A")); // Output: 1
console.log(titleToNumber("B")); // Output: 2
console.log(titleToNumber("Z")); // Output: 26
console.log(titleToNumber("AA")); // Output: 27
console.log(titleToNumber("AB")); // Output: 28
