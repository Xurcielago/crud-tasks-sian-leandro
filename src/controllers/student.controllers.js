import StudentModel from "../models/student.model.js";

//POST /api/students: crear un nuevo estudiante (student)
export const createStudent = async (req, res) => {
    try {
       // let {name, surname, gender} = req.body;

        /*
       
         Validaciones desde controladores
        //Validaciones para "name"
        const nameLength = await name.length
        if (nameLength > 100) {
            return res.status(400).json({ message: "Error: Campo name no puede contener más de 100 caracteres" })
        }
        if (name.trim() === '') {
            return res.status(400).json({ message: "Error: Campo name no puede estar vacío" })
        }

        //Validaciones para "surname"
        const surnameLength = await surname.length
        if (surnameLength > 100) {
            return res.status(400).json({ message: "Error: Campo surname no puede contener más de 100 caracteres" })
        }
        if (surname.trim() === '') {
            return res.status(400).json({ message: "Error: Campo surname no puede estar vacío" })
        }

        //Validaciones para "gender"
        if (!((gender == "M") || (gender == "F"))) {
            return res.status(400).json({ message: "Error: Campo gender debe ser M o F" })
        }
        if (gender.trim() === '') {
            return res.status(400).json({ message: "Error: Campo gender no puede estar vacío" })
        }
        
        
        */
       //const studentCreated = await StudentModel.create(req.body)
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


