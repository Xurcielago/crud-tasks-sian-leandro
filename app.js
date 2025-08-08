import express from "express";
import tasksRoutes from "./src/routes/tasks.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import { start } from "./src/config/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", tasksRoutes);
app.use("/api", userRoutes);

app.listen(PORT, async() => {
    await start();
    console.log("Servidor operativo")
})