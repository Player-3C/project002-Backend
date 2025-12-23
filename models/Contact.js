const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  subheading: { type: String, required: true },
  btnText: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
