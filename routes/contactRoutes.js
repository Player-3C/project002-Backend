import express from "express";
import { getContactInfo, createOrUpdateContact } from "../controllers/contactController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route
router.get("/", getContactInfo);

// Admin-only route
router.post("/", protect, createOrUpdateContact);

// ✅ Export default for ES Modules
export default router;
