const { GraphQLList } = require('graphql')
const TweetType = require('./types/tweet.type')

const dependencies = {
  GetTweets: require('Domain/UseCases/GetTweets')
}

module.exports = {
  type: new GraphQLList(TweetType),
  args: { },
  resolve: (_, args, context, injection) => {
    const { GetTweets } = Object.assign({}, dependencies, injection)

    return GetTweets(injection)
  }
}
