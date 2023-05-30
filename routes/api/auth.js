const express = require('express');
const ctrl = require('../../controllers');
const { validateBody, validateId } = require('../../middlewares');
const schemas = require('../../schemas');
const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
