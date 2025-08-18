import tasksModel from "../models/tasks.model.js";

//POST /api/tasks: crear una nueva tarea
export const createTasks = async (req, res) => {
    try {
        let {title, description, is_complete} = req.body;

        //Validaciones para "title"
        let titleUnico = await tasksModel.findOne({ where: { title } })
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

        //Validaciones para "is_complete"
        if (typeof is_complete !== "boolean") {
            return res.status(400).json({ message: "Error: Campo is_complete debe ser de tipo booleano (true o false)" })
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
            res.status(200).json(listedTaskID);
        } else {
            res.status(404).json({ message: 'La tarea buscada no existe' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};

//DELETE /api/tasks/:id: eliminar una tarea
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

//PUT /api/tasks/:id: actualizar una tarea existente (con validaciones)
export const updateTask = async (req, res) => {
    const { id } = req.params;
    let {title, description, is_complete} = req.body;

    //Validaciones para "title"
    const titleActual = await tasksModel.findByPk(id);
    if (titleActual.title !== title) {
        let titleUnico = await tasksModel.findOne({ where: { title } })
        if (titleUnico) {
            return res.status(400).json({ message: titleActual })
        }
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

    //Validaciones para "is_complete"
    if (typeof is_complete !== "boolean") {
        return res.status(400).json({ message: "Error: Campo is_complete debe ser de tipo booleano (true o false)" })
    }

    try {
        const findTask = await tasksModel.findByPk(id);

        if (findTask) {
            await findTask.update({title, description, is_complete}, {where: {id}});
            res.status(200).json(findTask);
        } else {
            res.status(404).json({ error: 'La tarea que se intenta actualizar no existe'});
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};