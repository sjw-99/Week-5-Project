const { Router } = require("express");
const currentController = require("../controllers/current");
const authenticator = require("../middleware/authenticator");
const currentRouter = Router();

currentRouter.post("/addtostudents", currentController.addToStudents)
currentRouter.get("/clear", currentController.clear)
currentRouter.get("/latest/score", currentController.getLastScore)
currentRouter.get("/mission/summary", currentController.index);
currentRouter.post("/cqadd", currentController.create);

module.exports = currentRouter;
