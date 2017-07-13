module.exports = {
  up: (queryInterface, Sequelize) => {
    const columns = {
      tweetId: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      text: {
        type: Sequelize.STRING
      },
      sentiment: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.DATE(6)
      },
      createdAt: {
        type: Sequelize.DATE(6)
      },
      updatedAt: {
        type: Sequelize.DATE(6)
      }
    }

    return queryInterface.createTable('Tweets', columns, require('./config/defaultTableConfig'))
  },
  down: (queryInterface) => queryInterface.dropTable('Tweets')
}
