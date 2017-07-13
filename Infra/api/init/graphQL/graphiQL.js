const { graphiqlExpress } = require('graphql-server-express')

module.exports = function createGraphiQLMiddleware (endpointURL) {
  return graphiqlExpress({ endpointURL })
}
