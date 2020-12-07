const express = require('express')
const router = express.Router()
const {
  noteList,
  noteUpdate,
  noteDelete,
} = require('../controllers/NoteController')

//list
router.get('/notes', noteList)

//update
router.put('/notes/:noteId', noteUpdate)

//delete
router.delete('/notebooks/notes/:noteId', noteDelete)
module.exports = router
