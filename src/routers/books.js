const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/BookController');

router.get('/create', bookController.create);
router.post('/store', bookController.store);
router.get('/:slug', bookController.show);

module.exports = router;
