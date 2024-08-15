import { DataTypes } from "sequelize";
import sequelize from "../database/database";

const ToDo = sequelize.define('ToDo', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 100,
            max: 250,
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 300,
            max: 500,
        }
    },
    isDone: {
        type: DataTypes.BOOLEAN,
    },
    createdBy: {
        type: DataTypes.STRING,
        references: {
            model: 'User',
            key: 'id'
        }
    },
});

export default ToDo;