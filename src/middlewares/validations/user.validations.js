import { body, param } from "express-validator";
import UserModel from "../../models/user.model.js";
 export const createUserValidation = [
  
  body("name")
    .notEmpty()
      .withMessage("Campo name es obligatorio")
    .isString()
      .withMessage("Campo name debe ser una cadena de caracteres")
    .isLength({ min: 2, max: 50 })
      .withMessage("Campo name debe ser entre 2 y 50 caracteres"),

  body("email")
    .notEmpty()
      .withMessage("Campo email es obligatorio")
    .isEmail
      .withMessage("Campo email debe usar el formato apropiado user@email.com"),
      
  body("password")
    .notEmpty()
      .withMessage("Campo password es obligatorio")
    .isLength({ min: 2, max: 50 })
      .withMessage("Campo password debe ser entre 2 y 50 caracteres"),
];
