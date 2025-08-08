import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const userModel = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, PRIMARY_KEY, AUTO_INCREMENT},
    name: {type: DataTypes.STRING(100), allowNull: false},
    email: {type: DataTypes.STRING(100), UNIQUE, allowNull: false},
    password: {type: DataTypes.STRING(100), allowNull:false},
})

export default userModel