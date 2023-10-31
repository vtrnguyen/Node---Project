const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/BookController');

router.delete('/:id/force', bookController.force);
router.get('/:id/edit', bookController.edit);
router.put('/:id', bookController.update);
router.get('/create', bookController.create);
router.patch('/:id/restore', bookController.restore);
router.post('/store', bookController.store);
router.get('/:slug', bookController.show);
router.delete('/:id', bookController.delete);

module.exports = router;
