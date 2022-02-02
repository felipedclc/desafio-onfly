require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'desafio_onfly',
    host: process.env.HOSTNAME,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'desafio_onfly',
    host: process.env.HOSTNAME,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'desafio_onfly',
    host: process.env.HOSTNAME,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
  },
};
