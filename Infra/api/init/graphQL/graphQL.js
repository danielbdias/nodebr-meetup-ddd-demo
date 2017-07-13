const { graphqlExpress } = require('graphql-server-express')

module.exports = async function initGraphQL () {
  const validateSchema = require('./validateSchema')

  const schema = await validateSchema()

  return graphqlExpress((request, b) => {
    const { setTransaction } = request

    return {
      schema: schema,
      context: { }
    }
  })
}
