const jwt = require('jsonwebtoken');

const { HttpError } = require('../helpers');
const { User } = require('../models');

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [ bearer, token ] = authorization.split(' ');

  const { SECRET_KEY } = process.env;

  if (bearer !== 'Bearer') {
    next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    req.user = user;

    if (!user) {
      next(HttpError(401));
    }
    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
