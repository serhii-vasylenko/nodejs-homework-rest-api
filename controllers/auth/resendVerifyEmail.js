const { HttpError, createVerifyEmail, sendEmail } = require('../../helpers');
const { User } = require('../../models');

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(400);
  }

  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }

  const verifyEmail = createVerifyEmail(user.verificationToken, email);

  sendEmail(verifyEmail);

  res.status(200).json({ message: 'Verification email sent' });
};

module.exports = resendVerifyEmail;
