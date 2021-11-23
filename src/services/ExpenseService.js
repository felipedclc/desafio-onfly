const { Expense } = require('../database/models');

const findByUserId = async (userId) => {
    const expense = await Expense.findAll({ where: { userId } });

    if (!expense) return { error: { message: 'Expense no found' } };

    return expense;
};

const findByUserEmail = async (email) => {
    const expense = await Expense.findAll({ where: { email } });

    if (!expense) return { error: { message: 'Expense no found' } };

    return expense;
};

module.exports = {
    findByUserId,
    findByUserEmail,
};