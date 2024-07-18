function isAnagram(s, t) {
  // Jika panjang kedua string berbeda, maka bukan anagram
  if (s.length !== t.length) {
    return false;
  }

  // Menggunakan objek untuk menghitung frekuensi kemunculan setiap karakter dalam string
  const charCount = {};

  // Mengisi objek charCount dengan frekuensi kemunculan setiap karakter dari string s
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Mengurangi frekuensi kemunculan setiap karakter dari string t
  for (let char of t) {
    // Jika karakter tidak ada dalam objek charCount atau frekuensi sudah mencapai 0, maka bukan anagram
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  // Jika semua karakter dari string t sudah terpenuhi dalam objek charCount, maka anagram
  return true;
}

// Contoh penggunaan
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
