function findSingleNumber(nums) {
  // Inisialisasi variabel untuk menyimpan jumlah elemen unik dan total jumlah elemen
  let uniqueSum = 0;
  let totalSum = 0;
  // Inisialisasi objek Set untuk melacak elemen-elemen unik yang telah ditemukan
  let uniqueNums = new Set();

  // Iterasi melalui setiap elemen dalam array nums
  for (let num of nums) {
    // Tambahkan nilai elemen ke totalSum
    totalSum += num;
    // Periksa apakah elemen sudah pernah ditemukan sebelumnya
    if (!uniqueNums.has(num)) {
      // Jika belum, tambahkan nilai elemen ke uniqueSum
      uniqueSum += num;
      // Tandai elemen sebagai elemen yang sudah ditemukan
      uniqueNums.add(num);
    }
  }

  // Kembalikan hasil perhitungan untuk menemukan elemen yang hanya muncul satu kali
  return 2 * uniqueSum - totalSum;
}

// Contoh penggunaan
console.log(findSingleNumber([2, 2, 1])); // Output: 1
console.log(findSingleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(findSingleNumber([1])); // Output: 1
