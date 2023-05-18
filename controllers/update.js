const { HttpError } = require("../helpers");
const { updateContact } = require("../models/contacts");
const { updSchema } = require("../schemas");

const update = async (req, res, next) => {
    try {
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
    } catch (error) {
      next(error);
    }
  }

  module.exports = update;