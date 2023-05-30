const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, 'Email or password incorrect');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, 'Email or password incorrect');
  }

  const payload = { id: user._id };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '8h' });
  res.status(201).json(token);
};

module.exports = login;
