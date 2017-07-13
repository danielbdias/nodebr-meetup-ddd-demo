const dependencies = {
  axios: require('axios'),
  config: require('Infra/config/twitter')
}

const getTweets = (hashtag, injection) => {
  const { axios, config } = Object.assign({}, dependencies, injection)

  return Promise.resolve([])
}

module.exports = {
  getTweets
}
