const { Router } = require('express')
const questionController = require('../controllers/questions')
const authenticator = require("../middleware/authenticator");
const questionRouter = Router() 

questionRouter.get('/question', questionController.index) 

questionRouter.get('/question/:question_id', questionController.showOne)
questionRouter.post('/question', questionController.submit)


module.exports = questionRouter;