const QueueHandler = require("./queueHandler");

// Membuat instance dari QueueHandler
const queueHandler = new QueueHandler();

// Menambahkan beberapa pesanan ke antrian
queueHandler.addToQueue("Burger");
queueHandler.addToQueue("Pizza");
queueHandler.addToQueue("Fries");
queueHandler.addToQueue("Soda");
