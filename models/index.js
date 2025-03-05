const {  DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const db = {};
db.Users = require("./user")(sequelize, DataTypes)
db.Urls = require("./url")(sequelize, DataTypes)
db.Users.hasMany(db.Urls, { foreignKey: 'user_id', onDelete: 'CASCADE' });  
db.Urls.belongsTo(db.Users, { foreignKey: 'user_id' });
sequelize.sync();


module.exports = db ;



