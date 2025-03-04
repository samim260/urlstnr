const {  DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const db = {};
db.Users = require("./user")(sequelize, DataTypes)
sequelize.sync();


module.exports = db ;



