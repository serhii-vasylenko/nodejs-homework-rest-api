const express = require('express');
const ctrl = require('../../controllers');
const { validateBody } = require('../../middlewares');
const schemas = require('../../schemas');
const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', ctrl.remove);

router.put('/:contactId', validateBody(schemas.updSchema), ctrl.update);

router.patch('/:contactId/favorite', validateBody(schemas.favSchema), ctrl.update);

module.exports = router;
