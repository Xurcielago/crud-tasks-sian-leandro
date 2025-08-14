import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

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
})

export default userModel