const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    data: "Hello from router",
  });
});

router.get("/profile", (req, res) => {
  res.send({
    data: "Profile route",
  });
});

module.exports = router;
