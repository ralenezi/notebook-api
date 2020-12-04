const { Notebook } = require('../db/models')
//list
exports.notebookList = async (req, res) => {
  try {
    const notebook = await Notebook.findAll()
    console.log('notebook', notebook)
    res.json(notebook)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//create
exports.notebookCteate = async (req, res) => {
  try {
    const newNotebook = await Notebook.create(req.body)
    res.status(201).json(newNotebook)
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
