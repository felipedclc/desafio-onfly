const MSG_NOT_FOUND = 'Expense no found';
const { Expense, User } = require('../database/models');

const findByUserId = async (userId) => {
    const expense = await Expense.findAll({ where: { userId } });

    if (!expense) return { error: { message: MSG_NOT_FOUND } };

    return expense;
};

const findByUserEmail = async (email) => {
    const { dataValues: { id } } = await User.findOne({ where: { email } });
    const expense = await Expense.findAll({ where: { userId: id } });
    
    if (!expense) return { error: { message: MSG_NOT_FOUND } };
    return expense;
};

const updateExpense = async (id, description, value, expenseDate) => {
    const expense = await Expense.findByPk(id);
    if (!expense) return { error: { message: MSG_NOT_FOUND } };

    await Expense.update({ description, value, expenseDate }, { where: { id } });
    
    return Expense.findByPk(id);
};

module.exports = {
    findByUserId,
    findByUserEmail,
    updateExpense,
};