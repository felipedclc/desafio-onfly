/* eslint-disable newline-per-chained-call */
const rescue = require('express-rescue');
const Joi = require('joi').extend(require('@joi/date'));
const middlewares = require('../middlewares');
const { Expense } = require('../database/models');
const ExpenseService = require('../services/ExpenseService');
const emailTransporter = require('../helpers/emailTransporter');

const create = [
    middlewares.validate(Joi.object({
        description: Joi.string().not().empty().max(191).required(),
        value: Joi.number().positive().required(),
        expenseDate: Joi.date().format('DD/MM/YYYY').max('now').required(),
    })),
    rescue(async (req, res) => {
        const { user: { id: userId, email }, body: { description, value, expenseDate } } = req;
        const { body } = req;
        const expense = await Expense.create({ description, userId, value, expenseDate });
        await emailTransporter(email, JSON.stringify(body));
        return res.status(201).json(expense);
    }),
];

const findByUserId = rescue(async (req, res) => {
    const { id } = req.params;
    const expenseByUserId = await ExpenseService.findByUserId(id);
    if (expenseByUserId.error) return res.status(404).json(expenseByUserId.error);
    return res.status(200).json(expenseByUserId);
});

const findByUserEmail = rescue(async (req, res) => {
    const { email } = req.body;
    const expenseByUserId = await ExpenseService.findByUserEmail(email);
    if (expenseByUserId.error) return res.status(404).json(expenseByUserId.error);
    return res.status(200).json(expenseByUserId);
});

const update = [
    middlewares.validate(Joi.object({
        description: Joi.string().not().empty().max(191).required(),
        value: Joi.number().positive().required(),
        expenseDate: Joi.date().format('DD/MM/YYYY').max('now').required(),
    })),
    rescue(async (req, res) => {
        const { body: { description, value, expenseDate }, params: { id } } = req;
        const expense = await ExpenseService
            .updateExpense(id, description, value, expenseDate);

        if (expense.error) return res.status(404).json(expense.error);

        return res.status(200).json(expense);
    }),
];

const destroy = rescue(async (req, res) => {
    const { id } = req.params;
    const expense = await ExpenseService.deleteExpense(id);
    if (expense.error) return res.status(404).json(expense.error);

    return res.status(204).send();
});

module.exports = {
    create,
    update,
    destroy,
    findByUserId,
    findByUserEmail,
};