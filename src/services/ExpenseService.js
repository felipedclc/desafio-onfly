const { Expense, User } = require('../database/models');

const findByUserId = async (userId) => {
    const expense = await Expense.findAll({ where: { userId } });

    if (!expense) return { error: { message: 'Expense no found' } };

    return expense;
};

const findByUserEmail = async (email) => {
    const { dataValues: { id } } = await User.findOne({ where: { email } });
    const expense = await Expense.findAll({ where: { userId: id } });
    
    if (!expense) return { error: { message: 'Expense no found' } };
    return expense;
};

module.exports = {
    findByUserId,
    findByUserEmail,
};