const dependencies = {
  sentiment: require('sentiment')
}

module.exports = function DiscoverTweetSentiment (tweetText, injection) {
  const { sentiment } = Object.assign({}, dependencies, injection)

  const result = sentiment(tweetText)

  if (result.score > 0.5) {
    return 'positive'
  } else if (result.score < -0.5) {
    return 'negative'
  }

  return 'neutral'
}
