import StudentModel from "../models/student.model.js";
import UserModel from "../models/user.model.js";

//POST /api/users: crear un nuevo usuario
export const createUser = async (req, res) => {
    try {
        let {name, email, password, student_id} = req.body;

        //Validaciones para "name"
        const nameLength = await name.length
        if (nameLength > 100) {
            return res.status(400).json({ message: "Error: Campo name no puede contener más de 100 caracteres" })
        }
        if (name.trim() === '') {
            return res.status(400).json({ message: "Error: Campo name no puede estar vacío" })
        }

        //Validaciones para "email"
        const emailLength = await email.length
        if (emailLength > 100) {
            return res.status(400).json({ message: "Error: Campo email no puede contener más de 100 caracteres" })
        }
        if (email.trim() === '') {
            return res.status(400).json({ message: "Error: Campo email no puede estar vacío" })
        }
        let emailUnico = await UserModel.findOne({ where: { email } })
        if (emailUnico) {
            return res.status(400).json({ message: "Error: Este email ya se encuentra registrado" })
        }

        //Validaciones para "password"
        const passwordLength = await password.length
        if (passwordLength > 100) {
            return res.status(400).json({ message: "Error: Campo password no puede contener más de 100 caracteres" })
        }
        if (password.trim() === '') {
            return res.status(400).json({ message: "Error: Campo password no puede estar vacío" })
        }

        //Validaciones para "student_id"


        const userCreated = await UserModel.create(req.body)
        res.status(201).json(userCreated)
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
}

//GET /api/users: listar todos los usuarios
export const listAllUser = async (res) => {
    try {
        const listedUsers = await UserModel.findAll({
            attributes: {
            exclude: ["id", "student_id"],
            },
            include: [
            {
                model: StudentModel,
                as: "student",
                attributes: {
                    exclude: ["id"],
                },
            },
            ],
        });
        res.json(listedUsers)

    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};

//GET /api/users/:id: obtener un usuario por ID
export const listUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const listedUserID = await UserModel.findByPk(id, {
            attributes: {
            exclude: ["id", "student_id"],
            },
            include: [
            {
                model: StudentModel,
                as: "student",
                attributes: {
                    exclude: ["id"],
                },
            },
            ],
        });
        if (listedUserID) {
            res.status(200).json(listedUserID);
        } else {
            res.status(404).json({ message: 'El usuario buscado no existe' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};

//DELETE /api/users/:id: eliminar un usuario
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const findUser = await UserModel.findByPk(id);
        if (findUser) {
            await findUser.destroy()
            res.json({ message: 'Usuario eliminado correctamente' })
        } else {
            res.status(404).json({ message: 'El usuario que se intenta eliminar no existe' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
}

//PUT /api/users/:id: actualizar un usuario existente (con validaciones)
export const updateUser = async (req, res) => {
    const { id } = req.params;
    let {name, email, password} = req.body;

    //Validaciones para "name"
    const nameLength = await name.length
    if (nameLength > 100) {
        return res.status(400).json({ message: "Error: Campo name no puede contener más de 100 caracteres" })
    }
    if (name.trim() === '') {
        return res.status(400).json({ message: "Error: Campo name no puede estar vacío" })
    }

    //Validaciones para "email"
    const emailLength = await email.length
    if (emailLength > 100) {
        return res.status(400).json({ message: "Error: Campo email no puede contener más de 100 caracteres" })
    }
    if (email.trim() === '') {
        return res.status(400).json({ message: "Error: Campo email no puede estar vacío" })
    }

    const emailActual = await UserModel.findByPk(id);
    if (emailActual.email !== email) {
        let emailUnico = await UserModel.findOne({ where: { email } })
        if (emailUnico) {
            return res.status(400).json({ message: "Error: Este email ya se encuentra registrado" })
        }
    }

    //Validaciones para "password"
    const passwordLength = await password.length
    if (passwordLength > 100) {
        return res.status(400).json({ message: "Error: Campo password no puede contener más de 100 caracteres" })
    }
    if (password.trim() === '') {
        return res.status(400).json({ message: "Error: Campo password no puede estar vacío" })
    }
    try {
        const findUser = await UserModel.findByPk(id);

        if (findUser) {
            await findUser.update({name, email, password}, {where: {id}});
            res.status(200).json(findUser);
        } else {
            res.status(404).json({ error: 'El usuario que se intenta actualizar no existe' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
};