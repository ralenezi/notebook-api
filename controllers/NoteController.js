const { Note, Notebook, Tag } = require('../db/models')

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

//Tag Create
exports.tagCreate = async (req, res) => {
  try {
    req.body.noteId = req.params.noteId
    const newTag = await Tag.create(req.body)
    res.status(201).json(newTag)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//list
exports.noteList = async (req, res) => {
  try {
    const notes = await Note.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'NotebookId'],
      },
      include: {
        model: Notebook,
        as: 'notebook',
        attributes: ['name'],
      },
      include: {
        model: Tag,
        as: 'tags',
        attributes: ['id', 'name'],
      },
    })
    res.json(notes)
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
