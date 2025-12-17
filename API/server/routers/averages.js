const { Router } = require('express')
const averagesController = require('../controllers/averages')

const averagesRouter = Router() 

averagesRouter.get('/student/summary', averagesController.index)


module.exports = averagesRouter;