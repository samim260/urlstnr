const { Sequelize } = require('sequelize');
const {DB, DB_USER,DB_PASS, DB_HOST , DB_DIALECT} = require('./_config')

const sequelize = new Sequelize(DB,DB_USER,DB_PASS,{
    host: DB_HOST,
    dialect: DB_DIALECT
});

const connectDataBase = () => {    
    sequelize.authenticate().then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err.message)
    })
}

module.exports={connectDataBase , sequelize}