const express = require('express');
const controller = require('../controllers');
const middlware = require('../middlewares');

// rota: '/users'
const userRouter = express.Router();
userRouter.post('/', controller.userController.create);
userRouter.get('/', middlware.jwtValidation, controller.userController.findAll);
userRouter.get('/:id', middlware.jwtValidation, controller.userController.findById);

module.exports = {
    userRouter,
};