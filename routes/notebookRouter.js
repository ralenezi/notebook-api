const express = require('express')
const router = express.Router()
const {
  notebookList,
  notebookCteate,
  notebookUpdate,
  notebookDelete,
} = require('../controllers/NotebookController')

//list
router.get('/notebooks', notebookList)

//create
router.post('/notebooks', notebookCteate)

//update
router.put('/notebooks/:notebookId', notebookUpdate)

//delete
router.delete('/notebooks/:notebookId', notebookDelete)
module.exports = router
