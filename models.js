const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'tweets_db',
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true
  }
});

//create your model here:
//1. Write a sequelize model for tweets. It should include columns for
// -text (string)
// -hashtag (string)
// -retweets (integer)

const tweets_table = sequelize.define('tweets', {
    text: Sequelize.STRING,
    hashtag: Sequelize.STRING,
    retweets: Sequelize.INTEGER
});

//export the models from the file

module.exports = {
  tweets_table,
  sequelize
}