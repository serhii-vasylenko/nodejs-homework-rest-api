const Joi = require('joi');

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  subscription: Joi.string(),
});

module.exports = registerSchema;