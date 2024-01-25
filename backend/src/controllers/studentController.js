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

    },
    create: async (req, res, next) => {

    },
    update: async (req, res, next) => {

    },
    delete: async (req, res, next) => {

    }
}
