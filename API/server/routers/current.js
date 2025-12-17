const { Router } = require('express')
const currentController = require('../controllers/current')

const currentRouter = Router() 

currentRouter.get('/questions/summary', currentController.index)
currentRouter.patch("/question/:question_id", currentController.update);

module.exports = currentRouter;