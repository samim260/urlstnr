module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define(
        'User',
        {
            id : {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey : true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique : true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            refresh_token : {
                type: DataTypes.STRING
            },
            is_active : {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }

        },{
            timestamps: false,
            tableName : "users",
            underscored: true
        }
    );
   return User
}