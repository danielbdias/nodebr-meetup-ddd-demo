const { graphqlExpress } = require('graphql-server-express')

module.exports = async function initGraphQL () {
  const validateSchema = require('./validateSchema')

  const schema = await validateSchema()

  return graphqlExpress((request, b) => {
    return {
      schema: schema,
      context: { }
    }
  })
}
