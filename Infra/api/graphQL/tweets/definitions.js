const tweet = require('./tweet.query')
const processTweets = require('./processTweets.mutation')

module.exports = {
  queries: { tweet },
  mutations: { processTweets }
}
