const express = require('express')
const lodashGet = require('lodash.get')

const configureExpressMiddlewares = api => {
  const cors = require('cors')
  const cookieParser = require('cookie-parser')

  const bodyMiddleware = require('Infra/api/init/middlewares/body')
  const winstonMiddleware = require('Infra/api/init/middlewares/winston')

  bodyMiddleware(api)
  winstonMiddleware(api)

  api.use(cookieParser())

  api.use(cors({
    origin: true,
    credentials: true
  }))
}

const configureEndpoints = (api, graphQL) => {
  const getGraphiQLMiddleware = require('Infra/api/init/graphQL/graphiQL')

  const isProduction = (require('Infra/config/environment') === 'production')

  api.use('/data', graphQL)

  !isProduction && api.use('/graphiql', getGraphiQLMiddleware('/data'))
}

module.exports = function configure (graphQL) {
  const api = express()

  configureExpressMiddlewares(api)
  configureEndpoints(api, graphQL)

  return api
}
