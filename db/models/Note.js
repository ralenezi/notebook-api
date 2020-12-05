module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Note', {
    title: {
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
