const fs = require('fs/promises');
const path = require('path');

const { HttpError, resizeImage } = require('../../helpers');
const { User } = require('../../models');

const avatarDir = path.resolve('public', 'avatars');

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;

  if (!req.file) {
    next(HttpError(401));
  }

  const { path: tmpUpload, mimetype } = req.file;

  await resizeImage(tmpUpload);

  const newFileName = `${_id.toString()}_avatar.${mimetype.split('/')[1]}`;
  const resultUpload = path.join(avatarDir, newFileName);
  const avatarURL = path.join('avatars', newFileName);

  await fs.rename(tmpUpload, resultUpload);

  const user = await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });
  res.status(200).json(user);
};

module.exports = updateAvatar;
