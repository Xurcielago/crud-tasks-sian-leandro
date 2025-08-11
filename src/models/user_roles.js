import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const userRoleModel = sequelize.define("user_roles", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    }
},{
    timestamps: false,
})

//RELACIONES:

userModel.belongsToMany(rolModel, {
    throught: userRoleModel, 
    foreignKey: "user_id",
    as: "roles"
});
rolModel.belongsToMany(userModel, {
    through: userRoleModel,
    foreignKey: "role_id",
    as: "users"
})

export default userRoleModel