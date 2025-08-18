import studentAttendanceModel from "../models/student_attendance.model";
//POST/api/studentAttendances
//Crear un nuevo registro de la tabla StundentAttendance

export const createStudentAttendance = async (req, res) => {
    try {
        let {student_id, attendance_id, attendance_date} = req.body;
        
        //Validaciones para student_id

        //Validaciones para attendance_id

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

        const studentAttendanceCreated = await studentAttendanceModel.create(req.body)
        res.status(201).json(studentAttendanceCreated)

    } catch (err) {
        res.status(500).json({message: "Error del lado interno del servidor", error: err.message})
    }
};

export const listAllStudentAttendance = async (res) => {
    try {
        const listedStudentAttendance = await listAllStudentAttendance.findAll()
        res.json(listedStudentAttendance)
        
    } catch (err) {
        res.status(500).json({message: "Error interno del lado del servidor", error: err.message})
    }
};