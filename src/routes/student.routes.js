import { Router } from "express";
const studentRoutes = Router();
import {createStudent, listALLstudent} from "../controllers/student.controllers.js"

studentRoutes.post("/students", createStudent)
studentRoutes.get("/students", listALLstudent)

export default studentRoutes