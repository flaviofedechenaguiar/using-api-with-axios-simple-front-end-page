const Sequelize = require('sequelize');
const connection = new Sequelize('api-database', 'root', '', {
    host: 'mysql-api',
    dialect: 'mysql',
    port: '3306',
    timezone: '-05:00'
})

module.exports = connection;