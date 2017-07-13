const dependencies = {
  TweetRepository: require('Infra/repositories/TweetRepository')
}

module.exports = function GetTweets (injection) {
  const { TweetRepository } = Object.assign({}, dependencies, injection)

  return TweetRepository.findAllByCriterias({})
}
