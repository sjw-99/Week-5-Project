const { Router } = require('express')
const questionsController = require('../controllers/questions')

const questionRouter = Router() 

questionRouter.get('/question', questionsController.index) 

questionRouter.get('/question/:question_id', questionsController.showOne)
questionRouter.post('/question', questionsController.submit)


module.exports = questionRouter;