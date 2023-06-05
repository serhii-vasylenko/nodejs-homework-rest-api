const fs = require('fs/promises');
const path = require('path');

const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const avatarDir = path.resolve('public', 'avatars');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, mimetype } = req.file;
  const newFileName = `${_id.toString()}_avatar.${mimetype.split('/')[1]}`;
  const resultUpload = path.join(avatarDir, newFileName);
  const avatarURL = path.join('avatars', newFileName);

  await fs.rename(tmpUpload, resultUpload);
  const user = await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });
  res.status(200).json(user);
};

module.exports = updateAvatar;
