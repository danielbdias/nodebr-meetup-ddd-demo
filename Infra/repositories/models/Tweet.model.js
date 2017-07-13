module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    tweetId: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV1, allowNull: false },
    text: DataTypes.STRING,
    sentiment: DataTypes.STRING,
    author: DataTypes.STRING,
    published: DataTypes.DATE(6)
  }, {
    timestamps: true
  })

  return Tweet
}
