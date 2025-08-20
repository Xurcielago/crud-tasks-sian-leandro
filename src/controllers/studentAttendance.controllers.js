import StudentAttendanceModel from "../models/studentAttendance.model.js";
import AttendanceModel from "../models/attendance.model.js";
import StudentModel from "../models/student.model.js";

//POST/api/studentAttendances
//Crear un nuevo registro de la tabla StundentAttendance
export const createStudentAttendance = async (req, res) => {
    try {
        let {student_id, attendance_id, attendance_date} = req.body;
        
        //Validaciones para student_id
        const studentExiste = await StudentModel.findByPk(student_id)
        if (!studentExiste) {
            return res.status(404).json({ message: "Error: El estudiante al que se intenta asignar no existe" })
        }

        //Validaciones para attendance_id
        const attendanceExiste = await AttendanceModel.findByPk(attendance_id)
        if (!attendanceExiste) {
            return res.status(404).json({ message: "Error: El tipo de asistencia que se intenta asignar no existe" })
        }
        
        //Validaciones para attendance_date
        const date = new Date(attendance_date);
        if (isNaN(date.getTime())) {
            return res.status(400).json({
            message: "La fecha ingresada no es válida, el formato aceptado es AAAA/MM/DD"
            });
        }

        const today = new Date();
        if (date > today) {
            return res.status(400).json({
            message: "La fecha no puede ser en el futuro"
            });
        }

        const studentAttendanceCreated = await StudentAttendanceModel.create(req.body)
        res.status(201).json(studentAttendanceCreated)

    } catch (err) {
        res.status(500).json({message: "Error del lado interno del servidor", error: err.message})
    }
};

export const listAllStudentAttendance = async (req, res) => {
    try {
        const listedStudentAttendance = await StudentAttendanceModel.findAll({
            attributes: {
            exclude: ["student_id", "attendance_id"],
            },
            include: [
                {
                model: StudentModel,
                as: "student",
                attributes: {
                    exclude: ["id"],
                    },
                },
                {
                model: AttendanceModel,
                as: "attendance",
                attributes: {
                    exclude: ["id"],
                    },
                },
            ],         
        });
        res.json(listedStudentAttendance)
        
    } catch (err) {
        res.status(500).json({message: "Error interno del lado del servidor", error: err.message})
    }
};