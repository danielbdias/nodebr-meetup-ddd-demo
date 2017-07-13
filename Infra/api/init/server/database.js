const speckRepositoryInit = require('speck-sequelize-repository').initialize
const models = require('Infra/repositories/models')

const databaseConfig = require('Infra/config/database')
const fileConfig = require('Infra/repositories/models/config')

module.exports = function initDatabase () {
  const config = {
    database: databaseConfig,
    files: fileConfig
  }

  return speckRepositoryInit(config)
    .then(models.init)
}
