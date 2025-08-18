import attendanceModel from "../models/attendance.model.js";

//POST /api/attendances: crear un tipo de asistencia (attendance)
export const createAttendance = async (req, res) => {
    try {
        let {status} = req.body;

        //Validaciones para "status"
        const statusLength = await status.length
        if (statusLength > 100) {
            return res.status(400).json({ message: "Error: Campo status no puede contener más de 100 caracteres" })
        }
        if (status.trim() === '') {
            return res.status(400).json({ message: "Error: Campo status no puede estar vacío" })
        }

        const attendanceCreated = await attendanceModel.create(req.body)
        res.status(201).json(attendanceCreated)
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};

//GET /api/attendances: listar todos los estudiantes (students)
export const listAllAttendance = async (res) => {
    try {
        const listedAttendance = await attendanceModel.findAll()
        res.json(listedAttendance)

    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }

};