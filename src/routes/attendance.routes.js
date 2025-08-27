import { Router } from "express";
const attendanceRoutes = Router();
import {createAttendance, listAllAttendance} from "../controllers/attendance.controllers.js"
import { createStudentValidation } from "../middlewares/validations/student.validations.js";
import { validator } from "../middlewares/validator.js";

attendanceRoutes.post("/attendances", createStudentValidation, validator, createAttendance)
attendanceRoutes.get("/attendances", listAllAttendance)


export default attendanceRoutes