'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

//relations
db.Notebook.hasMany(db.Note, {
  as: 'notes',
  foreignKey: { fieldName: 'notebookId', allowNull: false },
})
db.Note.belongsTo(db.Notebook, {
  as: 'notebook',
  foreignKey: { fieldName: 'notebookId' },
})

db.Note.belongsToMany(db.Tag, {
  through: 'NoteTag',
  as: 'tags',
  foreignKey: { fieldName: 'tagId' },
})
db.Tag.belongsToMany(db.Note, {
  through: 'NoteTag',
  as: 'notes',
  foreignKey: { fieldName: 'noteId' },
})

module.exports = db
