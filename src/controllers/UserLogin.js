const Joi = require('joi');
const rescue = require('express-rescue');
const { validate } = require('../middlewares');
const { User } = require('../database/models');
const { geneateToken } = require('../helpers/generateToken');

const userLogin = [
    validate(Joi.object({
        email: Joi.string().not().empty().required(),
        password: Joi.string().not().empty().required(),
    })),
    rescue(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid fields' });
        }

        if (user.email === email && user.password === password) {
            const { password: _, ...userWithoutPassword } = user.dataValues;
            const token = geneateToken(userWithoutPassword);
            return res.status(200).json({ token });
        }
    }),
];

module.exports = userLogin;