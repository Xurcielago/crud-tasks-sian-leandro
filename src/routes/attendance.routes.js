import { Router } from "express";
const attendanceRoutes = Router();
import {createAttendance, listAllAttendance} from "../controllers/attendance.controllers.js"

attendanceRoutes.post("/attendances", createAttendance)
attendanceRoutes.get("/attendances", listAllAttendance)


export default attendanceRoutes