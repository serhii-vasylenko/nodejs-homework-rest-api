const { BASE_URL } = process.env;

const createVerifyEmail = (verificationToken, email) => {
  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}" target="_blanc">Verify</a>`,
  };

  return verifyEmail;
};

module.exports = createVerifyEmail;
