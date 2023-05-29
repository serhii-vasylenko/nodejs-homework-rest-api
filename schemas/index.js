const addSchema = require('./contacts/addSchema');
const updSchema = require('./contacts/updSchema');
const favSchema = require('./contacts/favSchema');
const contactSchema = require('./contacts/contactSchema');
const userSchema = require('./auth/userSchema');
const registerSchema = require('./auth/registerSchema');
const loginSchema = require('./auth/loginSchema');
const subscriptionSchema = require('./auth/subscriptionSchema');

module.exports = {
  addSchema,
  favSchema,
  updSchema,
  contactSchema,
  userSchema,
  registerSchema,
  loginSchema,
  subscriptionSchema,
};
