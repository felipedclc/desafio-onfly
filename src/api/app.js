const cors = require('cors');
const express = require('express');
const routes = require('../routes/router');
const middlewares = require('../middlewares');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// teste api
app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong' })); 

app.use('/user', routes.userRouter);

app.use(middlewares.error);

module.exports = app;