import { Router } from "express";
const taskRoutes = Router();
import {createTasks, listALLtasks,  listTaskById, deleteTask, updateTask} from "../controllers/tasks.controllers.js"

taskRoutes.post("/tasks", createTasks)
taskRoutes.get("/tasks", listALLtasks)
taskRoutes.get("/tasks/:id", listTaskById)
taskRoutes.put("/tasks/:id", updateTask)
taskRoutes.delete("/tasks/:id", deleteTask)

export default taskRoutes