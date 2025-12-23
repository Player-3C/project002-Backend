const Contact = require("../models/Contact");

// GET contact info
const getContactInfo = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    if (!contact) {
      return res.status(404).json({ message: "Contact info not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE or UPDATE contact info
const createOrUpdateContact = async (req, res) => {
  try {
    const { heading, subheading, btnText } = req.body;

    let contact = await Contact.findOne();

    if (contact) {
      contact.heading = heading;
      contact.subheading = subheading;
      contact.btnText = btnText;
      await contact.save();
    } else {
      contact = await Contact.create({ heading, subheading, btnText });
    }

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContactInfo,
  createOrUpdateContact,
};
