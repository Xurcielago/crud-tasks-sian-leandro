import { body, param } from "express-validator";
import AttendanceModel from "../../models/attendance.model.js";
 
 export const createAttendanceValidation = [
  
  body("status")
    .notEmpty()
      .withMessage("Campo status es obligatorio")
    .isString()
      .withMessage("Campo status debe ser una cadena de caracteres")
    .isLength({ min: 2, max: 50 })
      .withMessage("Campo status debe ser entre 2 y 50 caracteres"),
];