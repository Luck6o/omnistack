const express = require('express');

const routes = express.Router();

const ProfileController = require('./controllers/ProfileController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

routes.get('/profiles', ProfileController.index);
routes.post('/profiles', ProfileController.store);
routes.post('/profiles/:profileId/likes', LikeController.store);
routes.post('/profiles/:profileId/dislikes', DislikeController.store);

module.exports = routes;