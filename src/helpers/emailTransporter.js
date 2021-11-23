const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('./smtp');
require('dotenv').config();

const { USER_EMAIL } = process.env;

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const emailTransporter = async (emailClient, body) => {
    const mailSent = await transporter.sendMail({
        text: body,
        subject: 'despesacadastrada',
        from: `Felipe Cardoso <${USER_EMAIL}>`,
        to: emailClient, 
    });

    // console.log(mailSent);
    return mailSent;
};

module.exports = emailTransporter;