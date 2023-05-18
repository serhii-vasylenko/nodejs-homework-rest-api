const { HttpError } = require("../helpers");
const { updateContact } = require("../models/contacts");
const { updSchema } = require("../schemas");

const update = async (req, res, next) => {
  const { error } = updSchema.validate(req.body);
  const { contactId } = req.params;
  if (error) {
    throw HttpError(400, "missing fields");
  }

  const contact = await updateContact(contactId, req.body);
  if (!contact) {
    throw HttpError(404, "Not Found");
  }

  res.status(200).json(contact);
};

module.exports = update;
