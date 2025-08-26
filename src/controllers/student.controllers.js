import StudentModel from "../models/student.model.js";

//POST /api/students: crear un nuevo estudiante (student)
export const createStudent = async (req, res) => {
    try {
        let {name, surname, gender} = req.body;
        const studentCreated = await StudentModel.create(req.body);
        res.status(201).json({message: "Estudiante creado correctamente:"})
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};

//GET /api/users: listar todos los estudiantes (students)
export const listAllStudent = async (req, res) => {
    try {
        const listedStudents = await StudentModel.findAll()
        res.json(listedStudents)

    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};


