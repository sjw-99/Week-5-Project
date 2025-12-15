const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const questionRouter = require('./routers/questions')

const app = express()

app.use(cors())
app.use(logger)
app.use(express.json())
app.use('/', questionRouter)

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Questions",
    description: "The questions await..."
  })
})

module.exports = app
