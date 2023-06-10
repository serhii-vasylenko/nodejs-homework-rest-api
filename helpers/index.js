const HttpError = require('./HttpError');
const ctrlWrapper = require('./ctrlWrapper');
const MongooseError = require('./MongooseError');
const resizeImage = require('./resizeImage');

module.exports = {
  HttpError,
  ctrlWrapper,
  MongooseError,
  resizeImage: ctrlWrapper(resizeImage),
};
