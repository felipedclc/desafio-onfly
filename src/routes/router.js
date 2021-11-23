const express = require('express');
const controller = require('../controllers');
const middlware = require('../middlewares');

// rota: '/users'
const userRouter = express.Router();
userRouter.post('/', controller.userController.create);
userRouter.get('/', middlware.jwtValidation, controller.userController.findAll);
userRouter.get('/:id', middlware.jwtValidation, controller.userController.findById);

// rota: '/login'
const loginRouter = express.Router();
loginRouter.post('/', controller.userLogin);

// rota '/expenses'
const expenseRouter = express.Router();
expenseRouter.post('/', middlware.jwtValidation, controller.expenseController.create);

module.exports = {
    userRouter,
    loginRouter,
    expenseRouter,
};