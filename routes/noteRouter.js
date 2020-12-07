const express = require('express')
const router = express.Router()
const {
  noteList,
  noteUpdate,
  noteDelete,
  tagCreate,
} = require('../controllers/NoteController')

//tag create router
router.post('/notes/:noteId/tags', tagCreate)

//list
router.get('/notes', noteList)

//update
router.put('/notes/:noteId', noteUpdate)

//delete
router.delete('/notebooks/notes/:noteId', noteDelete)
module.exports = router
