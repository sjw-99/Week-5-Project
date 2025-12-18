const { Router } = require('express')
const studentsController = require('../controllers/students')

const studentsRouter = Router() 

studentsRouter.get('/student/clear', studentsController.clear)


module.exports = studentsRouter;