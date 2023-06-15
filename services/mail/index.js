const sendEmail = require('./sendEmailSendGrid');
const createVerifyEmail = require('./createVirifyEmail');
const {ctrlWrapper} = require('../../helpers');

module.exports = {
  sendEmail: ctrlWrapper(sendEmail),
  createVerifyEmail,
};
