const { Router } = require("express");
const skillsRouter = Router();

const getSkillsController = require("../controllers/getSkillsController");

// Obtener todos los Productos
skillsRouter.get("/", getSkillsController);

module.exports = skillsRouter;