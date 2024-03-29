const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes.js');

const cors = require('cors');

const server = express();

mongoose.connect(, {
    useNewUrlParser: true
});

server.use(cors());

server.use(express.json());

server.use(routes);

server.listen(3000);
