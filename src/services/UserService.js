const { User } = require('../database/models');

const createUser = async (fullName, email, password) => {
    const userExist = await User.findOne({ where: { email } });

    if (userExist) return { error: { message: 'User already registered' } };

    return User.create({ fullName, email, password });
};

const findAllUsers = async () => {
    const users = await User.findAll();
    const { password: _, ...userWithoutPassword } = users;
    return userWithoutPassword;
};

module.exports = {
    createUser,
    findAllUsers,
};