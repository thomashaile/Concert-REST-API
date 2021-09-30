const controllers = require('../controllers/concertsController.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.getAllConcerts);
router.get('/:id', controllers.getOne);
router.post('/new', controllers.create);
router.put('/:id', controllers.update);
router.delete('/:id', controllers.delete);

module.exports = router;