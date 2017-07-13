const Tweet = require('Domain/Entities/Tweet')

const { Mapper } = require('speck-sequelize-repository')

const map = {
  toEntity: {
    'tweetId': 'tweetId',
    'text': 'text',
    'sentiment': 'sentiment',
    'author': 'author',
    'published': 'published'
  },
  toDatabase: {
    'tweetId': 'tweetId',
    'text': 'text',
    'sentiment': 'sentiment',
    'author': 'author',
    'published': 'published'
  }
}

module.exports = new Mapper(Tweet, map)
