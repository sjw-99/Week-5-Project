const { Router } = require('express')
const questionController = require('../controllers/questions')

const questionRouter = Router() 

questionRouter.get('/question', questionController.index) 

questionRouter.get('/question/:id', questionController.showOne)
questionRouter.post('/question', questionController.submit)


module.exports = questionRouter;