import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const tasksModel = sequelize.define("tasks", {
    title: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },

    description: {
        type: DataTypes.STRING(100), 
        allowNull: false},
        
    is_complete: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false, 
        allowNull: false
    }
},{
    timestamps: false,
})

export default tasksModel