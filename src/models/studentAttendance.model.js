import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import StudentModel from "./student.js";
import AttendanceModel from "./attendance.js";


const StudentAttendanceModel = sequelize.define("studentAttendance", {
 id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
  
  attendance_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  } 

},{
    timestamps: false,
})

//RELACIONES
StudentModel.belongsToMany(AttendanceModel, {
  through: StudentAttendanceModel,
  foreignKey: "student_id",
  as: "student",
});

AttendanceModel.belongsToMany(StudentModel, {
  through: StudentAttendanceModel,
  foreignKey: "attendance_id",
  as: "attendance",
});

export default StudentAttendanceModel