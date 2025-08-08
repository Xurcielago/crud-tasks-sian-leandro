import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const tasksModel = sequelize.define("tasks", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING(100), allowNull: false},
    description: {type: DataTypes.STRING(100), UNIQUE, allowNull: false},
    isComplete: {type: DataTypes.BOOLEAN, default: false}
})

export default tasksModel