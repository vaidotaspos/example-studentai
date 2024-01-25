const express = require('express');

const studentRouter = express.Router();

const studentController = require('../controllers/studentController');

// Gauti visa sarasa
studentRouter.get('/students', studentController.all);

module.exports = studentRouter;
