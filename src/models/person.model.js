import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const personModel = sequelize.define("person", {
    name: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100), 
        allowNull: false
    }
},{
    timestamps: false,
})

export default personModel