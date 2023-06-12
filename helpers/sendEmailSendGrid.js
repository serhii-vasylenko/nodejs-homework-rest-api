const sgMail = require('@sendgrid/mail');

require('dotenv').config();

const { SENDGRID_API_KEY, SENDER_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const msg = { ...data, from: SENDER_EMAIL };
  await sgMail.send(msg);

  return true;
};

module.exports = sendEmail;
