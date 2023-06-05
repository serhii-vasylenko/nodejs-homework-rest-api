const express = require('express');
const ctrl = require('../../controllers');
const { validateBody, authenticate, upload } = require('../../middlewares');
const schemas = require('../../schemas');
const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/',
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.updateSubcription
);

router.patch(
  '/avatar',
  authenticate,
  upload.single('avatarURL'),
  ctrl.updateAvatar
);

module.exports = router;
