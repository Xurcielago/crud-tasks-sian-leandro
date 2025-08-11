import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const roleModel = sequelize.define("role", {
    role_type: {
        type: DataTypes.STRING(100), 
        allowNull: false
    }
},{
    timestamps: false,
})

export default roleModel