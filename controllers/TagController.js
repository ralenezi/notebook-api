const { Tag, Note } = require('../db/models')

// //Tag Create
// exports.tagCreate = async (req, res) => {
//   try {
//     req.body.noteId = req.params.noteId
//     const newTag = await Tag.create(req.body)
//     res.status(201).json(newTag)
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// }

// Tag List
exports.tagList = async (req, res) => {
  try {
    const tag = await Tag.findAll({
      attributes: ['id', 'name'],
      include: {
        model: Note,
        as: 'notes',
        attributes: ['id', 'title', 'content'],
      },
    })
    res.json(tag)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
