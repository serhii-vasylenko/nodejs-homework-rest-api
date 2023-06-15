const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');
require('dotenv').config();

const { HttpError } = require('../../helpers');
const {sendEmail, createVerifyEmail} = require('../../services/mail');
const { User } = require('../../models');

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email, { protocol: 'https' });
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = createVerifyEmail(verificationToken, email);

  sendEmail(verifyEmail);

  res.status(201).json(newUser);
};

module.exports = register;
