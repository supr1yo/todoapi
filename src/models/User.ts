import { DataTypes } from "sequelize";
import sequelize from "../database/database";


const User = sequelize.define('User', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,   
});

export default User;
