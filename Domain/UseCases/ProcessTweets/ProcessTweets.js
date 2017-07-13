const dependencies = {
  TwitterClient: require('Infra/clients/twitter')
}

module.exports = function ProcessTweets (hashtag, injection) {
  const { TwitterClient } = Object.assign({}, dependencies, injection)

  return TwitterClient.findAllByCriterias({})
}
