const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'tweets_db',
  dialect: 'postgres',
  operatorsAliases: false,
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


//Creates the tables in the database.
sequelize.sync();

//export the models from the file
