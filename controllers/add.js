const { HttpError } = require("../helpers");
const { addContact } = require("../models/contacts");
const { addSchema } = require("../schemas");

const { nanoid } = require("nanoid");

const add = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing required name field");
  }

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
