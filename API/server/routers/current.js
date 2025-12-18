const { Router } = require("express");
const currentController = require("../controllers/current");
const authenticator = require("../middleware/authenticator");
const currentRouter = Router();

currentRouter.get("/mission/summary", currentController.index);
currentRouter.post("/cqadd", currentController.create);

module.exports = currentRouter;
