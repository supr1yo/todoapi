import { DataTypes } from "sequelize";
import sequelize from "../database/database";


const User = sequelize.define('User', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false,
    },
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,   
});

export default User;
