/* eslint-disable newline-per-chained-call */
const rescue = require('express-rescue');
const Joi = require('joi').extend(require('@joi/date'));
const middlewares = require('../middlewares');
const { Expense } = require('../database/models');
// const dateFormat = require('../helpers/dateFormat');

const create = [
    middlewares.validate(Joi.object({
        description: Joi.string().not().empty().max(191).required(),
        value: Joi.number().positive().required(),
        expenseDate: Joi.date().format('DD/MM/YYYY').max('now').required(),
    })),
    rescue(async (req, res) => {
        const { user: { id: userId }, body: { description, value, expenseDate } } = req;
        // const date = dateFormat(expenseDate);
        const expense = await Expense.create({ description, userId, value, expenseDate });
        res.status(201).json(expense);
    }),
];

module.exports = {
    create,
};