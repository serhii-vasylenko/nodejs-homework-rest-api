const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const register = async (req, res) => {
  const { email, password } = req.body;  

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email, { protocol: "https" });

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL,
  });
  res.status(201).json(newUser);
};

module.exports = register;
