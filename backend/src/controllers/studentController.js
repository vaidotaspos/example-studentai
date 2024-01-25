const {executeQuery} = require("../helpers");

module.exports = {
    all: async (req, res, next) => {
        // Apsirasome SQL uzklausa
        const sql = "SELECT * FROM student";

        // Ivykdome parasyta uzklausa
        const [items, error] = await executeQuery(sql);

        // Jei grizta klaida parodome ja
        if (error) {
            return next(error);
        }

        // Saraso grazinimas
        res.json(items);
    },
    single: async (req, res, next) => {
        const { id } = req.params;

        const sql = "SELECT * FROM student WHERE id=?";

        const [items, error] = await executeQuery(sql, [id]);

        if (error) {
            return next(error);
        }

        res.json(items[0]);
    },
    create: async (req, res, next) => {

    },
    update: async (req, res, next) => {

    },
    delete: async (req, res, next) => {

    }
}
