const { Router } = require('express')
const studentController = require('../controllers/current')

const studentRouter = Router() 

studentRouter.get('/questions/summary', studentController.index)


module.exports = studentRouter;