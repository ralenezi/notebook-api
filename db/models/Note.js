module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Note', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  })
  return Note
}
