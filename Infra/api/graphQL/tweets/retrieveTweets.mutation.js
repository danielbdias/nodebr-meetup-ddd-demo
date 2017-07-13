const { GraphQLString, GraphQLBoolean, GraphQLInt } = require('graphql')

const dependencies = {
  retrieveTweets: require('Domain/UseCases/RetrieveTweets')
}

module.exports = {
  type: GraphQLBoolean,
  args: {
    hashtag: {
      type: GraphQLString,
      name: 'Hashtag used in search'
    },
    tweetsToRetrieve: {
      type: GraphQLInt,
      name: 'Max number of Tweets to retrieve'
    }
  },
  resolve: (_, { hashtag, tweetsToRetrieve }, context, injection) => {
    const { retrieveTweets } = Object.assign({}, dependencies, injection)

    return retrieveTweets(hashtag, tweetsToRetrieve, injection)
  }
}
