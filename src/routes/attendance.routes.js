import { Router } from "express";
import {
    createAttendance, 
    listAllAttendance,
    listAttendanceById,
    deleteAttendance,
    updateAttendance
} from "../controllers/attendance.controllers.js"

import { validator } from "../middlewares/validator.js";
import { 
    createStudentValidation 
} from "../middlewares/validations/student.validations.js";

const attendanceRoutes = Router();
attendanceRoutes.post("/attendances", createStudentValidation, validator, createAttendance)
attendanceRoutes.get("/attendances", listAllAttendance)
attendanceRoutes.get("/attendances", listAttendanceById)
attendanceRoutes.delete("/attendances", deleteAttendance)
attendanceRoutes.put("/attendances", updateAttendance)

export default attendanceRoutes