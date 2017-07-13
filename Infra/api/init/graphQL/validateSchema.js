const { root } = require('Infra/api/graphQL/schema')
const { graphql } = require('graphql')
const { introspectionQuery } = require('graphql/utilities')

module.exports = function validateSchema () {
  return new Promise((resolve, reject) => {
    graphql(root, introspectionQuery).then((result) => {
      if (result.errors) {
        console.error('ERROR introspecting schema: ', JSON.stringify(result.errors, null, 2))
        return reject('ERROR introspecting schema')
      }

      resolve(root)
    })
  })
}
