import { Router } from "express";
const taskRoutes = Router();
import {createTask, listALLtask,  listTaskById, deleteTask, updateTask} from "../controllers/tasks.controllers.js"

taskRoutes.post("/tasks", createTask)
taskRoutes.get("/tasks", listALLtasks)
taskRoutes.get("/tasks/:id", listTaskById)
taskRoutes.put("/tasks/:id", deleteTask)
taskRoutes.delete("/tasks/:id", updateTask)

export default taskRoutes