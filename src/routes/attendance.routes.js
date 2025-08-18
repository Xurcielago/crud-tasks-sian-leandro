import { Router } from "express";
const attendanceRoutes = Router();
import {createAttendance, listAllAttendance} from "../controllers/student.controllers.js"

studentRoutes.post("/attendances", createAttendance)
studentRoutes.get("/attendances", listAllAttendance)


export default attendanceRoutes