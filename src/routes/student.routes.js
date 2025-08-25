import { Router } from "express";
import { 
    createStudent, 
    listAllStudent
} from "../controllers/student.controllers.js"

import { createStudentValidation } from "../middlewares/validations/student.validations.js";

import { validator } from "../middlewares/validator.js";

const studentRoutes = Router();
studentRoutes.post("/students", createStudentValidation, validator, createStudent)
studentRoutes.get("/students", listAllStudent)

export default studentRoutes