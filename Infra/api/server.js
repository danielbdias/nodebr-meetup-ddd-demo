const apiConfiguration = require('Infra/config/api')

if (apiConfiguration.isNewRelicActive) {
  require('newrelic')
}

const initGraphQL = require('./init/graphQL')

const initDatabase = require('./init/server/database')

const configureExpress = require('./init/server/express')

const notifyServerHasStarted = (api) => {
  api.listen(apiConfiguration.port, () => console.log(`Scup Care Billing Api is running on port ${apiConfiguration.port}`))
}

initDatabase()
  .then(initGraphQL)
  .then(configureExpress)
  .then(notifyServerHasStarted)
