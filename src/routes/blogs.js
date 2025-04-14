var express = require('express');
var router = express.Router();

const blogsController = require('../app/controllers/BlogsController');

router.use('/create', blogsController.create);
router.use('/store', blogsController.store);
router.use('/:slug', blogsController.show);
router.use('/', blogsController.show);

module.exports = router;
