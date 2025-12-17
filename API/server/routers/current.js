const { Router } = require('express')
const currentController = require('../controllers/current')
const authenticator = require("../middleware/authenticator");
const currentRouter = Router() 

currentRouter.get('/questions/summary', currentController.index)


module.exports = currentRouter;