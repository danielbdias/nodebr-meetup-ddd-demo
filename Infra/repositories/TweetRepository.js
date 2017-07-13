const { Repository } = require('speck-sequelize-repository')

const dependencies = {
  Tweet: require('./models').Tweet,
  TweetMap: require('./EntityMaps/TweetMap')
}

module.exports = Repository.for(dependencies.Tweet, dependencies.TweetMap, {})
