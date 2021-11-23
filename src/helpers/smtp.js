require('dotenv').config();

const { USER_EMAIL } = process.env;
const { PASSWORD_EMAIL } = process.env;

module.exports = {
    host: 'smtp.gmail.com',
    port: 587,
    user: USER_EMAIL,
    pass: PASSWORD_EMAIL,
};