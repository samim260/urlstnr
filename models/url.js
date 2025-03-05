module.exports = (Sequelize, DataTypes) => {
 const url = Sequelize.define('Url',{
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey : true
    },
    url : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    short_url : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    click : {
        type :DataTypes.INTEGER,
        defaultValue: 0
    },
    user_id : {
        type : DataTypes.UUID,
        allowNull : false
    }
 },{
    timestamps: false,
    tableName : "urls",
    underscored: true
 })
 return url
}