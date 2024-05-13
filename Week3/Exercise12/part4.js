function maxProfit(prices) {
  let minPrice = Infinity; // Harga terendah yang pernah ditemui
  let maxProfit = 0; // Keuntungan maksimum yang dapat diperoleh

  for (let price of prices) {
    // Jika harga saat ini lebih rendah dari harga terendah yang pernah ditemui, update harga terendah
    if (price < minPrice) {
      minPrice = price;
    }
    // Jika keuntungan yang bisa diperoleh dengan harga saat ini lebih besar dari keuntungan maksimum yang pernah diperoleh, update keuntungan maksimum
    else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

// Contoh penggunaan
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
