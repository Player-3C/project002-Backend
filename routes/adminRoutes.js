const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email !== process.env.ADMIN_EMAIL) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = password === process.env.ADMIN_PASSWORD;
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

module.exports = router;
