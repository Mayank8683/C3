const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('online_bookstore_sql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, 
});

module.exports = sequelize;
