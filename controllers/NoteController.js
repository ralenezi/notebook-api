const { Note } = require('../db/models')
//list
exports.noteList = async (req, res) => {
  try {
    const notes = await Note.findAll()
    console.log('notes', notes)
    res.json(notes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//create
exports.noteCteate = async (req, res) => {
  try {
    const newNote = await Note.create(req.body)
    res.status(201).json(newNote)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//update
exports.noteUpdate = async (req, res) => {
  const { noteId } = req.params
  try {
    const foundNote = await Note.findByPk(noteId)
    if (foundNote) {
      await foundNote.update(req.body)
      res.status(204).end()
    } else res.status(404).json({ message: 'Note not found!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//delete
exports.noteDelete = async (req, res) => {
  const { noteId } = req.params
  try {
    const foundNote = await Note.findByPk(noteId)
    if (foundNote) {
      await foundNote.destroy()
      res.status(204).end()
    } else res.status(404).json({ message: 'Note not found!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
