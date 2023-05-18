const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname,  "contacts.json");
console.log(contactsPath);

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = [...contacts].find(({ id }) => id === contactId);
    return contact || null;
  } catch (error) {
    console.log(error);
  }
}

const removeContact = async (contactId) => {
  try {
    let contacts = await listContacts();
    contacts = [...contacts].filter(({ id }) => id !== contactId);
    await reWriteContacts(contacts);
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

const addContact = async (body) => {
  try {
    let contacts = await listContacts();
    contacts = [...contacts, body];
    await reWriteContacts(contacts);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

const updateContact = async (contactId, body) => {
  try {
    let contacts = await listContacts();
    let contact = [...contacts].find(({ id }) => id === contactId);
    contact = {...contact, ...body};

    await reWriteContacts(contacts);
    return contact;
  } catch (error) {
    console.log(error);
  }
}

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
}
