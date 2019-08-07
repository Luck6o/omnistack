const express = require('express');

const routes = express.Router();

const ProfileController = require('./controllers/ProfileController');

routes.post('/profiles', ProfileController.store);

module.exports = routes;