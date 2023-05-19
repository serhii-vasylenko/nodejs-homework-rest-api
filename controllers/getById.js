const { HttpError } = require('../helpers');
const { getContactById } = require('../models/contacts');

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    throw HttpError(404, 'Not Found');
  }
  res.json(contact);
};

module.exports = getById;
