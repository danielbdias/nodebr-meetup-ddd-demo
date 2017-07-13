const dependencies = {
  config: require('Infra/config/twitter'),
  Twitter: require('twitter-node-client').Twitter
}

const parseSingleTweet = rawTweetData => {
  const text = rawTweetData.text
  const author = (rawTweetData.user && rawTweetData.user.screen_name) || 'unknown'
  const published = new Date(rawTweetData.created_at || new Date())

  return { text, author, published }
}

const parseTweets = data => {
  const dataAsObject = JSON.parse(data)

  return dataAsObject.statuses.map(parseSingleTweet)
}

const getTweetsByHashtag = (hashtag, maxTweets, injection) => {
  const { Twitter, config } = Object.assign({}, dependencies, injection)

  const client = new Twitter(config)

  return new Promise((resolve, reject) =>
    client.getSearch(
      { q: `#${hashtag}`, count: maxTweets },
      (err, response, body) => reject(new Error('Error calling Twitter API: ' + { err, response, body })),
      data => resolve(parseTweets(data))
    )
  )
}

module.exports = {
  getTweetsByHashtag
}
