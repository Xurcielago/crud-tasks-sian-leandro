import { Router } from "express";
const userRoutes = Router();
import { validator } from "../middlewares/validator.js";

import {
    createUser, 
    listAllUser,  
    listUserById, 
    deleteUser, 
    updateUser
} from "../controllers/user.controllers.js"

import { 
    createUserValidation, 
    deleteUserValidation, 
    getUserByIDValidation,
    updateUserValidation
} from "../middlewares/validations/user.validations.js";

userRoutes.post("/users", createUserValidation, validator, createUser)
userRoutes.get("/users", listAllUser)
userRoutes.get("/users/:id", getUserByIDValidation, validator, listUserById)
userRoutes.put("/users/:id", updateUserValidation, validator, updateUser)
userRoutes.delete("/users/:id", deleteUserValidation, validator, deleteUser)

export default userRoutes