import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import studentModel from "./student.js";
import attendanceModel from "./attendance.js";


const studentAttendanceModel = sequelize.define("student_attendance", {
 id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

},{
    timestamps: false,
    createdAt: created_at,
})

//RELACIONES
studentModel.belongsToMany(attendanceModel, {
  through: studentAttendance,
  foreignKey: "student_id",
  as: "student",
});

attendanceModel.belongsToMany(studentModel, {
  through: studentAttendance,
  foreignKey: "attendance_id",
  as: "attendance",
});

export default studentAttendanceModel