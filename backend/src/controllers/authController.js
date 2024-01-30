const bcrypt = require('bcrypt');
const {executeQuery} = require("../helpers");



const register = async (req, res, next) => {
    const {email, password} = req.body;

    const passwordHash = bcrypt.hashSync(password, process.env.SALT || 5);

    const sql = "INSERT INTO `user` (`email`, `password`, `scope`) VALUES (?, ?, 'manager')";

    const [responseObject, error] = await executeQuery(sql, [email, passwordHash]);

    if (error) {
        next(error);
    }

    if (responseObject.affectedRows === 1) {
        res.status(201).json({
            message: 'User created successfully!',
            id: responseObject.insertId
        })
    }

    res.end();
}

module.exports = {
    register,
}
