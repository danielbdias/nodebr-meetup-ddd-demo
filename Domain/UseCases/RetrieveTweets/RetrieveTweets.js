const dependencies = {
  TwitterClient: require('Infra/clients/twitter'),
  TweetRepository: require('Infra/repositories/TweetRepository'),
  ClassifyTweet: require('Domain/UseCases/ClassifyTweet')
}

const Tweet = require('Domain/Entities/Tweet')

const processSingleTweet = (rawTweet, injection) => {
  const { TweetRepository, ClassifyTweet } = Object.assign({}, dependencies, injection)

  const tweet = new Tweet(rawTweet)

  // classify
  tweet.sentiment = ClassifyTweet(tweet.text)

  // save in database
  return TweetRepository.save(tweet)
}

module.exports = async function RetrieveTweets (hashtag, tweetsToRetrieve, injection) {
  const { TwitterClient } = Object.assign({}, dependencies, injection)

  const tweets = await TwitterClient.getTweetsByHashtag(hashtag, tweetsToRetrieve, injection)

  // process tweets
  await Promise.all(
    tweets.map(rawTweet => processSingleTweet(rawTweet, injection))
  )

  return true
}
