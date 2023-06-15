const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const verify = async (req, res, next) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    next(HttpError(401, 'Email not found'));
  }

  await User.findByIdAndUpdate(
    user._id,
    {
      verificationToken: '',
      verify: true,
    },
    { new: true }
  );

  res.status(200).json({ message: 'Verification successful' });
};

module.exports = verify;
