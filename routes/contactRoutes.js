const express = require("express");
const router = express.Router();

const {
  getContactInfo,
  createOrUpdateContact,
} = require("../controllers/contactController");

const protect = require("../middleware/authMiddleware");

// Public route
router.get("/", getContactInfo);

// Admin-only route
router.post("/", protect, createOrUpdateContact);

module.exports = router;
