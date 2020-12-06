module.exports = (sequelize, DataTypes) => {
  const NoteTag = sequelize.define('NoteTag', {
    noteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Note',
        key: 'id',
      },
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tag',
        key: 'id',
      },
    },
  })
  return NoteTag
}
