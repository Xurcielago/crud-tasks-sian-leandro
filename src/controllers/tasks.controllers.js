import { BOOLEAN } from "sequelize";
import tasksModel from "../models/tasks.model.js";

//POST /api/tasks: crear una nueva tarea
export const createTasks = async (req, res) => {
    try {
        let {title, description, isComplete} = req.body;

        //Validaciones para "title"
        let titleUnico = await userModel.findOne({ where: { email } })
        if (titleUnico) {
            return res.status(400).json({ message: "Error: Este título ya se encuentra registrado" })
        }
        const titleLength = await title.length
        if (title > 100) {
            return res.status(400).json({ message: "Error: Campo title no puede contener más de 100 caracteres" })
        }
        if (title.trim() === '') {
            return res.status(400).json({ message: "Error: Campo title no puede estar vacío" })
        }

        //Validaciones para "description"
        const descriptionLength = await description.length
        if (descriptionLength > 100) {
            return res.status(400).json({ message: "Error: Campo description no puede contener más de 100 caracteres" })
        }
        if (description.trim() === '') {
            return res.status(400).json({ message: "Error: Campo description no puede estar vacío" })
        }

        //Validaciones para "isComplete"
        if (isComplete !== (true || false)) {
            return res.status(400).json({ message: "Error: Campo isComplete debe ser de tipo booleano (true o false)" })
        }

        const taskCreated = await tasksModel.create(req.body)
        res.status(201).json(taskCreated)
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
}

//GET /api/tasks: listar todos los tareas
export const listALLtasks = async (req, res) => {
    try {
        const listedTasks = await tasksModel.findAll()
        res.json(listedTasks)

    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }

};

//GET /api/tasks/:id: obtener una tarea por ID
export const listTaskById = async (req, res) => {
    const { id } = req.params;

    try {
        const listedTaskID = await tasksModel.findByPk(id);
        if (listedTaskID) {
            res.status(200).json(listeTaskID);
        } else {
            res.status(404).json({ message: 'La tarea buscada no existe' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};

//DELETE /api/tasks/:id: eliminar un usuario
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const findTask = await tasksModel.findByPk(id);
        if (findTask) {
            await findTask.destroy()
            res.json({ message: 'Tarea eliminada correctamente' })
        } else {
            res.status(404).json({ message: 'La tarea que se intenta eliminar no existe' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
}

//PUT /api/users/:id: actualizar un usuario existente (con validaciones)
export const updateUser = async (req, res) => {
    const { id } = req.params;
    let {title, description, isComplete} = req.body;

    //Validaciones para "title"
    let titleUnico = await userModel.findOne({ where: { title } })
    if (titleUnico) {
        return res.status(400).json({ message: "Error: Este título ya se encuentra registrado" })
    }
    const titleLength = await title.length
    if (title > 100) {
        return res.status(400).json({ message: "Error: Campo title no puede contener más de 100 caracteres" })
    }
    if (title.trim() === '') {
        return res.status(400).json({ message: "Error: Campo title no puede estar vacío" })
    }

    //Validaciones para "description"
    const descriptionLength = await description.length
    if (descriptionLength > 100) {
        return res.status(400).json({ message: "Error: Campo description no puede contener más de 100 caracteres" })
    }
    if (description.trim() === '') {
        return res.status(400).json({ message: "Error: Campo description no puede estar vacío" })
    }

    //Validaciones para "isComplete"
    if (isComplete !== (true || false)) {
        return res.status(400).json({ message: "Error: Campo isComplete debe ser de tipo booleano (true o false)" })
    }

    try {
        const findTask = await tasksModel.findByPk(id);

        if (findTask) {
            await findTask.update({title, description, isComplete}, {where: {id}});
            res.status(200).json(findTask);
        } else {
            res.status(404).json({ error: 'La tarea que se intenta actualizar no existe'});
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};