const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const questionRouter = require('./routers/questions')
const currentRouter = require('./routers/current')
const studentRouter = require('./routers/students')

const app = express()


app.use(cors())
app.use(logger)
app.use(express.json())
app.use('/', questionRouter)
app.use('/', currentRouter)
app.use('/', studentRouter)

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Questions",
    description: "The questions await..."
  })
})

module.exports = app
