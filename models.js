const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 'tweets_db',
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true,
  },
});

//create your model here:


db.sync();

//export the models from the file
