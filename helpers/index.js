const HttpError = require('./HttpError');
const ctrlWrapper = require('./ctrlWrapper');
const MongooseError = require('./MongooseError');
const resizeImage = require('./resizeImage');
const sendEmail = require('./sendEmailSendGrid');

module.exports = {
  HttpError,
  ctrlWrapper,
  MongooseError,
  resizeImage: ctrlWrapper(resizeImage),
  sendEmail: ctrlWrapper(sendEmail),
};
