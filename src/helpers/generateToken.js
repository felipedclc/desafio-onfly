require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
    expiresIn: '3h',
    algorithm: 'HS256',
};

const geneateToken = (user) => {
    const { password: { _, ...userWithoutPassword } } = user;
    return jwt.sign(userWithoutPassword, JWT_SECRET, jwtConfig);
};

module.exports = {
    geneateToken,
};