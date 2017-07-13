const { Entity, validatorAdapter } = require('speck-entity')
const Joi = require('joi')
const adapter = validatorAdapter('joi', Joi)

class Tweet extends Entity { }

Tweet.SCHEMA = {
  tweetId: adapter(Joi.string().guid()),
  text: adapter(Joi.string()),
  sentiment: adapter(Joi.string().allow(['positive', 'negative', 'neutral'])),
  author: adapter(Joi.string()),
  published: adapter(Joi.date())
}

module.exports = Tweet
