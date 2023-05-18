const { HttpError } = require("../helpers");
const { addContact } = require("../models/contacts");

const { nanoid } = require("nanoid");

const add = async (req, res, next) => {
  const contact = {
    id: nanoid(),
    ...req.body,
  };
  await addContact(contact);
  res.status(201).json({
    contact,
  });
};

module.exports = add;
