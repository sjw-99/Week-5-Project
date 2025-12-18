require('dotenv').config();
const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const questionsRouter = require('./routers/questions')
const currentRouter = require('./routers/current')
const averagesRouter = require('./routers/averages')


const userRouter = require('./routers/user')



const app = express()


app.use(cors())
app.use(logger)
app.use(express.json())
app.use('/', questionsRouter)
app.use('/', currentRouter)
app.use('/users', userRouter)
app.use('/', averagesRouter)

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Questions",
    description: "The questions await..."
  })
})

module.exports = app
