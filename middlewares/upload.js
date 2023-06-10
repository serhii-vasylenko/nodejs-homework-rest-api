const multer = require('multer');
const path = require('path');

const { HttpError } = require('../helpers');

const tmpDir = path.resolve('tmp');
const multerConfig = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const resrictedFileTypes = ['image/jpeg', 'image/png'];

const fileFilter = (req, file, cb) => {
  const { mimetype } = file;

  if (!resrictedFileTypes.includes(mimetype)) {
    return cb(HttpError(400, 'Invalid file format'));
  }
  cb(null, true);
};

const upload = multer({
  storage: multerConfig,
  fileFilter,
});

module.exports = upload;
