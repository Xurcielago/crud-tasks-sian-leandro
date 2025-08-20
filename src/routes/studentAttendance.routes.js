import { Router } from "express";
const studentAttendanceRoutes = Router();
import { createStudentAttendance, listAllStudentAttendance } from "../controllers/studentAttendance.controllers.js";

studentAttendanceRoutes.post("/studentAttendances", createStudentAttendance)
studentAttendanceRoutes.get("/studentAttendances", listAllStudentAttendance)

export default studentAttendanceRoutes