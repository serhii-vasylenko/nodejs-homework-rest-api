const { nanoid } = require("nanoid");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");

const { addSchema, updSchema } = require("../schemas");
const { HttpError } = require("../helpers");

const getAll = async (req, res, next) => {
    try {
      const contacts = await listContacts();
      res.status(200).json(contacts);
    } catch (error) {
      next(error);
    }
  }


  module.export = {
    getAll,

  }