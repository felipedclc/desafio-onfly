const express = require('express');
const controller = require('../controllers');
const { jwtValidation } = require('../middlewares');

// rota: '/users'
const userRouter = express.Router();
userRouter.post('/', controller.userController.create);
userRouter.get('/', jwtValidation, controller.userController.findAll);
userRouter.get('/:id', jwtValidation, controller.userController.findByPK);

// rota: '/login'
const loginRouter = express.Router();
loginRouter.post('/', controller.userLogin);

// rota '/expenses'
const expenseRouter = express.Router();
expenseRouter.post('/', jwtValidation, controller.expenseController.create);
expenseRouter.get('/userId/:id', jwtValidation, controller.expenseController.findByUserId);
expenseRouter.get('/userEmail', jwtValidation, controller.expenseController.findByUserEmail);
expenseRouter.put('/:id', jwtValidation, controller.expenseController.update);

module.exports = {
    userRouter,
    loginRouter,
    expenseRouter,
};