const controllers = require('./controllers');
const express = require('express');
const path = require('path');
const routes = express.Router();

//lets write our routes
routes.get('/concerts', controllers.concerts);
routes.get('/concerts/:id', controllers.singleConcert);
routes.post('/concerts/new', controllers.addConcert);
routes.put('/concerts/:id', controllers.updateConcert);
routes.delete('/concerts/:id', controllers.deleteConcert);

module.exports = routes;