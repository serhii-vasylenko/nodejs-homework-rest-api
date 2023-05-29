const express = require('express');
const { validateBody, validateId } = require('../../middlewares');
const schemas = require('../../schemas');
const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema));

module.exports = router;
