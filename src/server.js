const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes.js');

const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://luck6o:lucas123alves@cluster0-lbuds.mongodb.net/alves?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());

server.use(express.json());

server.use(routes);

server.listen(3000);