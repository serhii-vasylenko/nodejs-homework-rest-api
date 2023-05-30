const {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
} = require('./contacts');

const { register } = require('./auth');

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
  register,
};
