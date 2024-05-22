function orderFood(foodName: string, callback: (message: string) => void) {
  console.log(`Memesan makanan: ${foodName}`);
  setTimeout(() => {
    callback(`Makanan "${foodName}" telah dipesan!`);
  }, 3000);
}

function deliverFood(foodName: string, callback: (message: string) => void) {
  console.log(`Mengantarkan makanan: ${foodName}`);
  setTimeout(() => {
    callback(`Makanan "${foodName}" telah diantarkan!`);
  }, 5000);
}

// Contoh penggunaan
orderFood("Pizza", (orderMessage) => {
  console.log(orderMessage);
  deliverFood("Pizza", (deliverMessage) => {
    console.log(deliverMessage);
  });
});
