function addToCart(itemName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`Menambahkan barang ke keranjang: ${itemName}`);
    setTimeout(() => {
      resolve(`Barang "${itemName}" telah ditambahkan ke keranjang.`);
    }, 2000);
  });
}

function checkout(): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("Memproses checkout...");
    setTimeout(() => {
      resolve("Checkout berhasil.");
    }, 3000);
  });
}

function processOrder(itemName: string): Promise<void> {
  return addToCart(itemName)
    .then((addToCartMessage) => {
      console.log(addToCartMessage);
      return checkout();
    })
    .then((checkoutMessage) => {
      console.log(checkoutMessage);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}

// Contoh penggunaan
processOrder("Laptop");
