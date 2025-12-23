const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // your connectDB file

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
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);

//  START SERVER 
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`Server running on http://localhost:${PORT}`)
// );

module.exports = {app}