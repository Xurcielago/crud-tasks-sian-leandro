import { Router } from "express";
const userRoutes = Router();
import {createUser, listALLuser,  listUserById, deleteUser, updateUser} from "../controllers/user.controllers.js"

userRoutes.post("/users", createUser)
userRoutes.get("/users", listALLuser)
userRoutes.get("/users/:id", listUserById)
userRoutes.put("/users/:id", updateUser)
userRoutes.delete("/users/:id", deleteUser)

export default userRoutes