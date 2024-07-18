function majorityElement(nums) {
  // Inisialisasi kandidat majority element dan jumlah kemunculannya
  let candidate = null;
  let count = 0;

  // Iterasi melalui setiap elemen dalam array nums
  for (let num of nums) {
    // Jika count menjadi 0, ubah kandidat menjadi elemen saat ini
    if (count === 0) {
      candidate = num;
      count++;
    }
    // Jika elemen saat ini sama dengan kandidat, tambahkan count
    else if (candidate === num) {
      count++;
    }
    // Jika elemen saat ini tidak sama dengan kandidat, kurangi count
    else {
      count--;
    }
  }

  // Kembalikan kandidat sebagai majority element
  return candidate;
}

// Contoh penggunaan
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
