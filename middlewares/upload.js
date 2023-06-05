const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');

const tmpDir = path.resolve('tmp');
const multerConfig = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, cb) => {
    // const prefix = nanoid(10);
    // console.log(prefix);
    // cb(null, `${prefix}_${file.originalname}`);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
