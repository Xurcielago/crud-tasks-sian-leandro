import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const studentModel = sequelize.define("student", {
    name: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },

    surname: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },

    gender: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },

},{
    timestamps: false,
})

// RELACIONES:
tasksModel.belongsTo(userModel, {foreignKey: "user_id", as: "author" });
userModel.hasMany(tasksModel, {foreignKey: "user_id"});

export default tasksModel