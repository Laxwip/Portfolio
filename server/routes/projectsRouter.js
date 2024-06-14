const { Router } = require("express");
const projectsRouter = Router();

const getProjectsController = require("../controllers/getProjectsController");

// Obtener todos los Productos
projectsRouter.get("/", getProjectsController);

module.exports = projectsRouter;