const getAll = require('./contacts/getAll');
const getById = require('./contacts/getById');
const add = require('./contacts/add');
const remove = require('./contacts/remove');
const update = require('./contacts/update');
const updateStatusContact = require('./contacts/updateStatus');

const register = require('./auth/register');

const { ctrlWrapper } = require('../helpers');
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  remove: ctrlWrapper(remove),
  update: ctrlWrapper(update),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  register: ctrlWrapper(register),
};
