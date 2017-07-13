const tweets = require('./tweets.query')
const retrieveTweets = require('./retrieveTweets.mutation')

module.exports = {
  queries: { tweets },
  mutations: { retrieveTweets }
}
