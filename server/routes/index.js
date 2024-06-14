const { Router } = require("express");
const router = Router();

const projectsRouter = require("./projectsRouter");
const skillsRouter = require("./skillsRouter");


// router PROYECTOS
router.use("/projects", projectsRouter);
// router SKILLS
router.use("/skills", skillsRouter);

module.exports = router;
