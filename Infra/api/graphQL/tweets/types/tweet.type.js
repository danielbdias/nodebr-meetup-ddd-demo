const { GraphQLString, GraphQLInt, GraphQLObjectType } = require('graphql')

const Tweet = new GraphQLObjectType({
  name: 'Tweet',
  description: 'A single tweet',
  fields: {
    text: {
      type: GraphQLString,
      description: 'Tweet text'
    },
    sentiment: {
      type: GraphQLString,
      description: 'The sentiment detected in the tweet'
    },
    author: {
      type: GraphQLString,
      description: 'Author name'
    },
    published: {
      type: GraphQLInt,
      description: 'Tweet published date'
    }
  }
})

module.exports = Tweet
