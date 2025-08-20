import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
<<<<<<< HEAD
import personModel from "./person.model.js";

const userModel = sequelize.define("user", {
=======
import StudentModel from "./student.model.js";

const UserModel = sequelize.define("user", {
>>>>>>> relaciones
    name: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },
<<<<<<< HEAD
    email: {
        type: DataTypes.STRING(100), 
        allowNull: false
    },
=======

    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

>>>>>>> relaciones
    password: {
        type: DataTypes.STRING(100), 
        allowNull:false
    }
},{
    timestamps: false,
})

<<<<<<< HEAD
//RELACIONES:

personModel.belongsTo (userModel, {foreignKey: "person_id"});
userModel.hasOne(personModel, {foreignKey: "person_id"});


export default userModel
=======
UserModel.belongsTo(StudentModel, {
    foreignKey: "student_id", 
    as: "student"
 });
 
StudentModel.hasMany(UserModel, {
    foreignKey: "student_id"
});

export default UserModel
>>>>>>> relaciones
