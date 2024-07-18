// -- Callback
// Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain.

// contoh case 1 -> membuat teh panas
function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(function () {
    console.log("Water has boiled!");
    callback();
  }, 3000); // Wait for 3 seconds to simulate boiling
}

function brewTea() {
  console.log("Pouring boiling water into the tea cup.");
  console.log("Adding the tea bag and letting it steep for a few minutes.");
  console.log("Tea is ready to be enjoyed!");
}

boilWater(brewTea);

// contoh case 2 -> order martabak
function orderMartabak(type, quantity, callback) {
  console.log(
    `Pesanan martabak ${type} sebanyak ${quantity} sedang diproses...`
  );
  setTimeout(function () {
    console.log(`Pesanan martabak ${type} (${quantity} porsi) sudah siap!`);
    callback();
  }, 3000); //  Tunggu 3 detik untuk simulasi proses pesanan
}

function notifyOrderProcessed() {
  console.log("Pesanan martabak sudah siap diambil!");
}

orderMartabak("matcha", 5, notifyOrderProcessed);

// -- Synchronous
// Synchronous adalah saat kita harus menunggu tugas sebelumnya selesai sebelum melanjutkan ke tugas berikutnya.

// contoh case : alur belanja online
function addItemToCart(item, cart) {
  console.log(`Adding ${item} to cart...`); // Process of adding item to cart
}

function calculateTotal(cart) {
  console.log("Calculating total..."); // Process of calculating total
}

function processPayment(total) {
  console.log("Processing payment..."); // Process of payment
}

function displayMessage(status) {
  console.log(`Payment ${status}`);
}

// Sequential steps in synchronous flow
let cart = [];
addItemToCart("Shirt", cart);
calculateTotal(cart);
processPayment(100000); //  Total is hardcoded for simplicity
displayMessage("successful");

// -- Asynchronous
// Asynchronous -> kita bisa menjalankan tugas berikutnya meskipun tugas sebelumnya belum selesai

//  contoh case 1 : memesan ojek online
function orderRide(customerName, location, callback) {
  console.log(`${customerName} is ordering a ride to ${location}...`);
  console.log("------------------------------");
  console.log("Loading ...");
  console.log("------------------------------");
  setTimeout(() => {
    console.log(`Ride has arrived at ${location}`);
    callback();
  }, 3000); // Simulate ride arrival time 3 seconds
}

console.log("Starting online ride booking");

orderRide("Andy", "Palmerah Street", function notifyResult() {
  console.log("Ride booking process completed");
});

// contoh case 2 : mengirim email pekerjaan
function sendEmail(subject, recipient, callback) {
  console.log(`Sending email with subject "${subject}" to ${recipient}...`);
  console.log("------------------------------");
  console.log("Loading ...");
  console.log("------------------------------");
  setTimeout(() => {
    console.log(`Email with subject "${subject}" sent to ${recipient}`);
    callback();
  }, 2000); // Simulate email sending time 2 seconds
}

console.log("Starting email sending process");

sendEmail(
  "Meeting 1on1 Reminder",
  "alice@example.com",
  function notifyResult() {
    console.log("Email sending process completed");
  }
);

// Promise
// Promise -> kita bisa mengaitkan penanganan (handler) dengan nilai keberhasilan atau alasan kegagalan dari sebuah tindakan yang bersifat asinkron

// contoh case 1 : menyamakan antara nomor peserta dan undian
function lotteryDraw() {
  return new Promise((resolve, reject) => {
    console.log("---- Mulai Mengacak Nomor Undian ----");
    setTimeout(() => {
      const winningNumber = Math.floor(Math.random() * 20) + 1; // Angka undian antara 1 hingga 20
      const luckyNumber = Math.floor(Math.random() * 20) + 1; // Angka pemain antara 1 hingga 20

      if (luckyNumber === winningNumber) {
        resolve(
          `Selamat, angka Anda (${luckyNumber}) cocok dengan angka undian ${winningNumber}! Anda menang hadiah!`
        );
      } else {
        reject(
          `Maaf, angka Anda (${luckyNumber}) tidak cocok dengan angka undian (${winningNumber}). Coba lagi lain waktu.`
        );
      }
    }, 3000); // Simulasi proses undian 3 detik
  });
}

lotteryDraw()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("---- Undian Selesai ----");
  });

// contoh case 2 : mekanisme login
function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        resolve("Login berhasil!");
      } else {
        reject("Username atau password salah. Silakan coba lagi.");
      }
    }, 3000); // Simulasi proses login 3 detik
  });
}

login("admin", "password")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Async Await
// Async Await -> membantu kita menulis kode Promise tanpa perlu mengelola Promise secara langsung, membuatnya lebih mudah dipahami dan ditulis.

// contoh case 1 : mengambil data dari API jsonplaceholder
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// -- JSON
// -- JSON adalah format ringan untuk menyimpan dan mengirimkan data

// contoh case : merepresentasikan informasi tentang sebuah restoran
const restaurant = {
  nama: "Warung Makan Pagi Sore",
  lokasi: {
    alamat: "Jl. Cipete Raya No. 123",
    kota: "Jakarta Selatan",
    kodePos: "12345",
  },
  menu: [
    {
      nama: "Rendang",
      harga: 45000,
    },
    {
      nama: "Ayam Goreng",
      harga: 40000,
    },
    {
      nama: "Es Teh Manis",
      harga: 8000,
    },
  ],
  ulasan: [
    {
      nama: "Budi",
      rating: 4,
      komentar: "Rasanya enak dan harga terjangkau.",
    },
    {
      nama: "Siti",
      rating: 5,
      komentar: "Pelayanan cepat dan ramah.",
    },
  ],
};
