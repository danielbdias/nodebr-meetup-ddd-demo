const dependencies = {
  TwitterClient: require('Infra/clients/twitter')
}

module.exports = function ProcessTweets (hashtag, injection) {
  const { TweetRepository } = Object.assign({}, dependencies, injection)

  return TweetRepository.findAllByCriterias({})
}
