const { GraphQLString, GraphQLBoolean } = require('graphql')

const dependencies = {
  processTweets: require('Domain/UseCases/ProcessTweets')
}

module.exports = {
  type: GraphQLBoolean,
  args: {
    hashtag: {
      type: GraphQLString,
      name: 'Hashtag used in search'
    }
  },
  resolve: (_, { hashtag }, context, injection) => {
    const { processTweets } = Object.assign({}, dependencies, injection)

    return processTweets(hashtag, injection)
  }
}