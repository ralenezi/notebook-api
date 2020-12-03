module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Note", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Note;
};
