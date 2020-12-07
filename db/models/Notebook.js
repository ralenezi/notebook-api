module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Notebook
}
