import { Router } from "express";
const studentRoutes = Router();
import {createStudent, listAllStudent} from "../controllers/student.controllers.js"

studentRoutes.post("/students", createStudent)
studentRoutes.get("/students", listAllStudent)

export default studentRoutes