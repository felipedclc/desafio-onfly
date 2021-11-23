require('dotenv').config();
const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const jwtValidation = rescue(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const { dataValues: { email } } = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = user;
    next();
});

module.exports = jwtValidation;