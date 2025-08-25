import { body, param } from "express-validator";
import StudentModel from "../../models/student.model.js";
 
 export const createStudentValidation = [
  
  body("name")
    .notEmpty()
      .withMessage("Campo name es obligatorio")
    .isString()
      .withMessage("Campo name debe ser una cadena de caracteres")
    .isLength({ min: 2, max: 50 })
      .withMessage("Campo name debe ser entre 2 y 50 caracteres"),

  body("surname")
    .notEmpty()
      .withMessage("Campo surname Es obligatorio"),
      
  body("gender")
    .notEmpty()
      .withMessage("Campo gender es obligatorio")
    /*.custom(async (value) => {
      if (!((gender == "M") || (gender == "F"))) {
        throw new console.error("Campo gender debe ser M o F");
      }
    })*/,
];
