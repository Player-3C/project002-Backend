import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    subheading: { type: String, required: true },
    btnText: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
