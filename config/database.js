const { Sequelize } = require('sequelize');

const connectDataBase = () => {
    const sequelize = new Sequelize('urlstnr', 'postgres', 'root', {
        host: 'localhost',
        dialect: 'postgres'
    });
    
    sequelize.authenticate().then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err.message)
    })
}

module.exports=connectDataBase