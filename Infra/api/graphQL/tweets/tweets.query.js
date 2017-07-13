const { GraphQLString } = require('graphql')
const TweetType = require('./types/tweet.type')

const dependencies = {
  GetTweets: require('Domain/UseCases/GetTweets')
}

module.exports = {
  type: TweetType,
  args: { },
  resolve: (_, args, context, injection) => {
    const { GetTweets } = Object.assign({}, dependencies, injection)

    return GetTweets(injection)
  }
}
