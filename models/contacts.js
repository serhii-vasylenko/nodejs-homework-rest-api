const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");
console.log(contactsPath);

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = [...contacts].find(({ id }) => id === contactId);
  return contact || null;
};

const removeContact = async (contactId) => {
  let contacts = await listContacts();
  const contact = [...contacts].find(({ id }) => id === contactId);
  if (!contact) {
    return null;
  }
  contacts = [...contacts].filter(({ id }) => id !== contactId);
  await reWriteContacts(contacts);
  return contact;
};

const addContact = async (body) => {
  let contacts = await listContacts();
  contacts = [...contacts, body];
  await reWriteContacts(contacts);
  return body;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  let contact = [...contacts].find(({ id }) => id === contactId);
  if (!contact) {
    return null;
  }
  contact = { ...contact, ...body };

  await reWriteContacts(contacts);
  return contact;
};

const reWriteContacts = async (contacts) => {
  try {
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
