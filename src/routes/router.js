const express = require('express');
const controller = require('../controllers');
const middlware = require('../middlewares');

// rota: '/users'
const userRouter = express.Router();
userRouter.post('/', controller.userController.create);
userRouter.get('/', middlware.jwtValidation, controller.userController.findAll);
userRouter.get('/:id', middlware.jwtValidation, controller.userController.findByPK);

// rota: '/login'
const loginRouter = express.Router();
loginRouter.post('/', controller.userLogin);

// rota '/expenses'
const expenseRouter = express.Router();
expenseRouter.post('/', middlware.jwtValidation, controller.expenseController.create);
expenseRouter.get('/userId/:id', middlware.jwtValidation, 
    controller.expenseController.findByUserId);
expenseRouter.get('/userEmail', middlware.jwtValidation,
    controller.expenseController.findByUserEmail);

module.exports = {
    userRouter,
    loginRouter,
    expenseRouter,
};