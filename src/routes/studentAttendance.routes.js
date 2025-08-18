import { Router } from "express";
const studentAttendanceRoutes = Router();
import { createStudentAttendance } from "../controllers/studentAttendance.controllers";

studentAttendanceRoutes.post("/studentAttendances", createStudentAttendance)
studentAttendanceRoutes.get("/studentAttendances", listAllStudentAttendance)

export default studentAttendanceRoutes