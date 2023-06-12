const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const msg = { ...data, from: EMAIL };
  await sgMail.send(msg);

  return true;
};

module.exports = sendEmail;
