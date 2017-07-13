const { expect } = require('chai')
const Tweet = require('./models').Tweet
const TweetMap = require('./EntityMaps/TweetMap')
const TweetRepository = require('./TweetRepository')

describe('TweetRepository', () => {
  it('exports a BaseRepository for Tweet', () => {
    expect(TweetRepository.sequelizeModel).to.equal(Tweet)
    expect(TweetRepository.mapper).to.equal(TweetMap)
  })
})
