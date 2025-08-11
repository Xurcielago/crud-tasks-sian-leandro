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

// RELACIONES:
tasksModel.belongsTo(userModel, {foreignKey: "user_id", as: "author" });
userModel.hasMany(tasksModel, {foreignKey: "user_id"});

export default tasksModel