const {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
} = require('./contacts');

const {
  register,
  login,
  getCurrent,
  logout,
  updateSubcription,
  updateAvatar,
} = require('./auth');

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
  register,
  login,
  getCurrent,
  logout,
  updateSubcription,
  updateAvatar,
};
