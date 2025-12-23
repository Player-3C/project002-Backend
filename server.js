import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // note the .js extension

// Import routes
import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

//  MIDDLEWARES
app.use(cors());
app.use(express.json());

//  DATABASE CONNECTION
connectDB();

// Optional root route for testing
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

//  ROUTES
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);

//  START SERVER
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// Export app if needed (for testing)
export default app;
