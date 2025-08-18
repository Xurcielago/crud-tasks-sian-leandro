import express from "express";
import taskRoutes from "./src/routes/task.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import studentRoutes from "./src/routes/student.routes.js";
import attendanceRoutes from "./src/routes/attendance.routes.js";

import { start } from "./src/config/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", taskRoutes);
app.use("/api", userRoutes);
app.use("/api", studentRoutes);
app.use("/api", attendanceRoutes);

app.listen(PORT, async() => {
    await start();
    console.log("Servidor operativo")
})