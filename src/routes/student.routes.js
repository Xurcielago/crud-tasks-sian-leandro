import { Router } from "express";
import { 
    createStudent, 
    listAllStudent,
    listStudentById,
    deleteStudent,
    updateStudent
} from "../controllers/student.controllers.js"

import { validator } from "../middlewares/validator.js";
import { 
    createStudentValidation 
} from "../middlewares/validations/student.validations.js";

const studentRoutes = Router();
studentRoutes.post("/students", createStudentValidation, validator, createStudent)
studentRoutes.get("/students", listAllStudent)
studentRoutes.get("/students/:id", listStudentById)
studentRoutes.delete("/students/:id", deleteStudent)
studentRoutes.put("/students/:id", updateStudent)

export default studentRoutes