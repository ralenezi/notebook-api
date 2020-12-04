const express = require('express')
const router = express.Router()
const {
  noteList,
  noteCteate,
  noteUpdate,
  noteDelete,
} = require('../controllers/NoteController')

//list
router.get('/notes', noteList)

//create
router.post('/notes', noteCteate)

//update
router.put('/notes/:noteId', noteUpdate)

//delete
router.delete('/notes/:noteId', noteDelete)
module.exports = router
