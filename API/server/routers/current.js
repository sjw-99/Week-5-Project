const { Router } = require('express')
const currentController = require('../controllers/current')

const currentRouter = Router() 

currentRouter.get('/questions/summary', currentController.index)


module.exports = currentRouter;