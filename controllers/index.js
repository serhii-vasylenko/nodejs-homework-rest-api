const {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
} = require('./contacts');

const { register, login } = require('./auth');

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
  register,
  login,
};
