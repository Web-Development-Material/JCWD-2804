// app.js

const express = require("express");
const router = require("./src/router/router.js");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json()); // Contoh middleware untuk mengizinkan parsing JSON

// Router
app.use("/api", router);

// Routes di aplikasi utama
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
