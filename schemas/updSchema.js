const Joi = require("joi");

const updSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
})
  .min(1)
  .message("missing fields");

module.exports = { updSchema };
