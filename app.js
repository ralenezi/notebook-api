const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db/models')
const noteRouter = require('./routes/noteRouter')
const notebookRouter = require('./routes/notebookRouter')
const tagRouter = require('./routes/tagRouter')
const path = require('path')

const app = express()

//Middleware
app.use(cors())
app.use(bodyParser.json())
//Routes
app.use('/', noteRouter)
app.use('/', notebookRouter)
app.use('/', tagRouter)

const run = async () => {
  try {
    await db.sequelize.sync({ alter: true })
    console.log('Connection to the database successful!')
    await app.listen(8000, () => {
      console.log('The application is running on localhost:8000')
    })
  } catch (error) {
    console.error('Error connecting to the database: ', error)
  }
}

run()
