const express = require('express')
const router = express.Router()
const {
  notebookList,
  notebookCreate,
  notebookUpdate,
  notebookDelete,
  noteCreate,
  noteDetail,
} = require('../controllers/NotebookController')

//list
router.get('/notebooks', notebookList)

//note detail
router.get('/notebooks/:notebookId', noteDetail)

//create
router.post('/notebooks', notebookCreate)

//note create
router.post('/notebooks/:notebookId/notes', noteCreate)

//update
router.put('/notebooks/:notebookId', notebookUpdate)

//delete
router.delete('/notebooks/:notebookId', notebookDelete)
module.exports = router
