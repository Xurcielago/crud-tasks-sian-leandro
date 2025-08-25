import { body, param } from "express-validator";
import StudentModel from "../../models/student.model.js";
 
 export const createStudentValidation = [
  body("name").notEmpty().withMessage("El campo name debe ser obligatorio"),
  body("lastname")
    .notEmpty()
    .withMessage("El campo lastname debe ser obligatorio"),
];
