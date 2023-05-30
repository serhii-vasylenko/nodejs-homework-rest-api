const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};

module.exports = register;
