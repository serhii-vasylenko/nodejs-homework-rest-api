const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubcription = require('./updateSubcription');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendVerifyEmail = require('./resendVerifyEmail');

const { ctrlWrapper } = require('../../helpers');
module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubcription: ctrlWrapper(updateSubcription),
  updateAvatar: ctrlWrapper(updateAvatar),
  verify: ctrlWrapper(verify),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
