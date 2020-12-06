const { Notebook, Note } = require('../db/models')
//list
exports.notebookList = async (req, res) => {
  try {
    const notebook = await Notebook.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: Note,
          as: 'notes',
          attributes: ['id', 'title'],
        },
      ],
    })
    res.json(notebook)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//note detail
exports.noteDetail = async (req, res) => {
  const { notebookId } = req.params
  try {
    const foundNote = await Note.findAll({
      where: {
        notebookId: notebookId,
      },
    })
    if (foundNote) {
      res.json(foundNote)
    } else res.status(404).json({ message: 'Notebook not found!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//create
exports.notebookCreate = async (req, res) => {
  try {
    const newNotebook = await Notebook.create(req.body)
    res.status(201).json(newNotebook)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//create note
exports.noteCreate = async (req, res) => {
  try {
    req.body.notebookId = req.params.notebookId
    const newNote = await Note.create(req.body)
    res.status(201).json(newNote)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//update
exports.notebookUpdate = async (req, res) => {
  const { notebookId } = req.params
  try {
    const foundNote = await Notebook.findByPk(notebookId)
    if (foundNote) {
      await foundNote.update(req.body)
      res.status(204).end()
    } else res.status(404).json({ message: 'Notebook not found!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//delete
exports.notebookDelete = async (req, res) => {
  const { notebookId } = req.params
  try {
    const foundNote = await Notebook.findByPk(notebookId)
    if (foundNote) {
      await foundNote.destroy()
      res.status(204).end()
    } else res.status(404).json({ message: 'Notebook not found!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
