import userModel from "../models/user.model.js";

//POST /api/users: crear un nuevo usuario
export const createUser = async (req, res) => {
    try {
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
        let emailUnico = await userModel.findOne({ where: { email } })
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

        const userCreated = await userModel.create(req.body)
        res.status(201).json(userCreated)
    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }
}

//GET /api/users: listar todos los usuarios
export const listALLuser = async (req, res) => {
    try {
        const listedUsers = await userModel.findAll()
        res.json(listedUsers)

    } catch (err) {
        res.status(500).json({ message: 'Error del lado interno del servidor: ', error: err.message })
    }

};

//GET /api/users/:id: obtener un usuario por ID
export const listUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const listedUserID = await userModel.findByPk(id);
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
        const findUser = await userModel.findByPk(id);
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

    /*
    const emailExiste = await User.findOne {{
        where: { email: email, id: {[Op.ne]: req.params.id } } ;
    }};

    const userActual = await userModel.findByPk(id);
    let emailUnico = await userModel.findOne({ where: { email } })
    */
    const userActual = await userModel.findByPk(id);
    if (userActual) {
        if (userActual.email !== email) {
            let emailUnico = await userModel.findOne({ where: { email } })
            if (emailUnico) {
                return res.status(400).json({ message: "Error: Este email ya se encuentra registrado" })
            }
        }
    } else {
        return res.status(404).json({ message: "Error: Usuario no encontrado" })
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
        const findUser = await userModel.findByPk(id);

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


