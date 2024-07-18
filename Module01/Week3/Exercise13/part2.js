const QueueHandler = require("./queueHandler");

// Membuat instance dari QueueHandler
const queueHandler = new QueueHandler();

// Menambahkan pesanan ke antrian
queueHandler.addToQueue("Order 1");
queueHandler.addToQueue("Order 2");
queueHandler.addToQueue("Order 3");
queueHandler.addToQueue("Order 4");

// Mencetak semua data dalam antrian
console.log("All orders in queue:");
console.log(queueHandler.queue);

// Menjalankan proses antrian
(async () => {
  console.log("Start processing orders...");
  while (queueHandler.queue.length > 0) {
    await queueHandler.processQueue();
    console.log(`Queue ${queueHandler.queue.length + 1} Done in XXX minutes`); // XXX minutes bisa diganti dengan waktu sebenarnya
  }
})();
