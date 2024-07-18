function generate(numRows) {
  // Jika numRows adalah 0, kembalikan array kosong
  if (numRows === 0) {
    return [];
  }

  // Inisialisasi segitiga Pascal dengan array pertama ([1])
  const triangle = [[1]];

  // Mulai dari baris kedua hingga numRows
  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle[i - 1]; // Ambil baris sebelumnya
    const newRow = [1]; // Set elemen pertama dari baris baru

    // Iterasi dari elemen kedua hingga satu sebelum elemen terakhir dari baris sebelumnya
    for (let j = 1; j < prevRow.length; j++) {
      // Tambahkan hasil penjumlahan dua elemen di atasnya ke baris baru
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1); // Tambahkan elemen terakhir dari baris baru
    triangle.push(newRow); // Tambahkan baris baru ke segitiga Pascal
  }

  // Kembalikan segitiga Pascal yang telah dibuat
  return triangle;
}

// Contoh penggunaan
console.log(generate(5)); // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // Output: [[1]]
