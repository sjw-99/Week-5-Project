const { Router } = require('express')
const currentController = require('../controllers/current')
const authenticator = require("../middleware/authenticator");
const currentRouter = Router() 

currentRouter.get('/qnum/:question_id', currentController.addToCurrent)
currentRouter.get('/questions/summary', currentController.index)
currentRouter.patch("/question/:question_id", currentController.update);

module.exports = currentRouter;