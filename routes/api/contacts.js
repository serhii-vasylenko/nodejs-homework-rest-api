const express = require("express");
const { nanoid } = require("nanoid");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  res.json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
  });
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  contact
    ? res.json({
        status: "success",
        code: 200,
        data: {
          contact,
        },
      })
    : res.json({
        status: "error",
        code: 404,
        message: "Not found",
      });
});

router.post("/", async (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.json({
      status: "error",
      code: 400,
      message: "missing required name field",
    });
  }

  const contact = {
    id: nanoid(),
    ...req.body,
  };
  await addContact(contact);
  res.json({
    status: "success",
    code: 201,
    message: "contact created",
  });
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    return res.json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }

  await removeContact(contactId);
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
  });
});

router.put("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  if (Object.entries(req.body).length === 0) {
    return res.json({
      status: "error",
      code: 400,
      message: "missing fields",
    });
  }

  let contact = await getContactById(contactId);
  if (!contact) {
    return res.json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }

  contact = await updateContact(contactId, req.body);
  res.json({
    status: "success",
    code: 200,
    data: contact,
  });
});

module.exports = router;
