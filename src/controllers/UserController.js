const Joi = require('joi');
const rescue = require('express-rescue');
const middleware = require('../middlewares');
const UserService = require('../services/UserService');
const { User } = require('../database/models');
const { geneateToken } = require('../helpers/generateToken');

const create = [
    middleware.validate(Joi.object({
        fullName: Joi.string().not().empty().required(),
        email: Joi.string().email().required(),
        password: Joi.string().not().empty().required(),
    })),
    rescue(async (req, res) => {
        const { fullName, email, password } = req.body;
        const user = await UserService.createUser(fullName, email, password);

        if (user.error) {
            return res.status(409).json(user.error);
        }

        const token = geneateToken(user.dataValues);

        return res.status(201).json({ token });
    }),
];

const findAll = rescue(async (_req, res) => {
    const users = await UserService.findAllUsers();
    return res.status(200).json(users);
});

const findByPK = rescue(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
});

module.exports = {
    create,
    findAll,
    findByPK,
};