class QueueHandler {
  constructor() {
    // Inisialisasi antrian kosong dan status proses menjadi false
    this.queue = [];
    this.isProcessing = false;
  }

  addToQueue(order) {
    // Menambahkan pesanan ke antrian
    this.queue.push(order);
    // Jika tidak sedang diproses, mulai proses antrian
    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  async processQueue() {
    // Mengubah status proses menjadi true
    this.isProcessing = true;
    // Selama antrian tidak kosong, ambil pesanan pertama dari antrian dan proses
    while (this.queue.length > 0) {
      const order = this.queue.shift();
      console.log(`Processing order: ${order}`);
      // Menunggu interval random sebelum memproses pesanan berikutnya
      await this.randomDelay();
    }
    // Setelah semua pesanan diproses, mengubah status proses menjadi false
    this.isProcessing = false;
    console.log("All orders processed.");
  }

  async randomDelay() {
    // Menghitung delay secara random antara 1-10 detik
    const delay = Math.floor(Math.random() * 10) + 1;
    // Menunggu delay sebelum melanjutkan eksekusi
    await new Promise((resolve) => setTimeout(resolve, delay * 1000));
  }
}

// Menjadikan class QueueHandler dapat diakses dari file lain
module.exports = QueueHandler;
