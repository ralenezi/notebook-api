module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Notebook", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Notebook;
};
