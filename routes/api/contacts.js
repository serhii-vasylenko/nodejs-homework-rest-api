const express = require('express');
const ctrl = require('../../controllers');
const { validateBody, validateId, authenticate } = require('../../middlewares');
const schemas = require('../../schemas');
const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, validateId, ctrl.getById);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', authenticate, validateId, ctrl.remove);

router.put(
  '/:contactId',
  authenticate,
  validateId,
  validateBody(schemas.updSchema),
  ctrl.update
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  validateId,
  validateBody(schemas.favSchema),
  ctrl.updateStatusContact
);

module.exports = router;
