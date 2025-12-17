const { Router } = require('express')
const studentController = require('../controllers/current')
const authenticator = require("../middleware/authenticator");
const studentRouter = Router() 

studentRouter.get('/questions/summary', studentController.index)


module.exports = studentRouter;