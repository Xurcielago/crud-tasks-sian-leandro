import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import personModel from "./person.model.js";

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

//RELACIONES:

personModel.belongsTo (userModel, {foreignKey: "person_id"});
userModel.hasOne(personModel, {foreignKey: "person_id"});


export default userModel