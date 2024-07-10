import { DataTypes } from "sequelize";
import sequelize from "../database/database";


const Task = sequelize.define('Task', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false,
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            max: 30,
            min: 10
        }
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            max: 30,
            min: 10
        }
    },
    createdBy: {
        type: DataTypes.STRING,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    todo: {
        type: DataTypes.JSONB,
        references: {
            model: 'Todo',
            key: 'id'
        }
    }
});

export default Task;
