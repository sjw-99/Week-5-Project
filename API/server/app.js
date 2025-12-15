const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const questionRouter = require('./routers/questions')

const app = express()

app.use(cors())
app.use(logger)
app.use(express.json())
app.use('/questions', questionRouter)

module.exports = app
