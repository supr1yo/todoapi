import { Model, DataTypes } from "sequelize";
import sequelize from "../database/database";

export class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "user",
  }
);
