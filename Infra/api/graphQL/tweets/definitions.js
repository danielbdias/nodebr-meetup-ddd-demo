const tweets = require('./tweets.query')
const processTweets = require('./processTweets.mutation')

module.exports = {
  queries: { tweets },
  mutations: { processTweets }
}
