const express = require("express");
const { nanoid } = require("nanoid");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

const { addSchema, updSchema } = require("../../schemas");
const { HttpError } = require("../../helpers");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      throw HttpError(404, "Not Found");
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await removeContact(contactId);

    if (!contact) {
      throw HttpError(404, "Not Found");
    }

    res.status(200).json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
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
});

module.exports = router;
