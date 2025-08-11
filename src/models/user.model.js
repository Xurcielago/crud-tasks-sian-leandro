import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import tasksModel from "./tasks.model.js";

const userModel = sequelize.define("user", {
    name: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100), 
        allowNull:false
    }
},{
    timestamps: false,
    //createdAt: createdAt
})

// RELACIONES:
tasksModel.belongsTo(userModel, {foreignKey: "user_id"});
tasksModel.hasMany(tasksModel, {foreignKey: "user_id"});

export default userModel