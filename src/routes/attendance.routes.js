import { Router } from "express";
import {
    createAttendance, 
    listAllAttendance,
    listAttendanceById,
    deleteAttendance,
    updateAttendance
} from "../controllers/attendance.controllers.js";

import { validator } from "../middlewares/validator.js";
import { 
    createStudentValidation,
    deleteAttendanceValidation, 
    getAttendanceByIDValidation, 
    updateAttendanceValidation 
} from "../middlewares/validations/student.validations.js";

const attendanceRoutes = Router();
attendanceRoutes.post("/attendances", createStudentValidation, validator, createAttendance)
attendanceRoutes.get("/attendances", listAllAttendance)
attendanceRoutes.get("/attendances", getAttendanceByIDValidation, validator, listAttendanceById)
attendanceRoutes.delete("/attendances", deleteAttendanceValidation, validator, deleteAttendance)
attendanceRoutes.put("/attendances", updateAttendanceValidation, validator, updateAttendance)

export default attendanceRoutes