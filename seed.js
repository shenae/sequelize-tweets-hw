//import your models on this line
const { tweets_table } = require('./models');


const main = async () => {
  try {
  // 1. Using your models, create new tweets with
  //your the data found in `data.js`. Be sure to have at least one tweet with
  //retweets with an integer greater than 50 (you'll see why)

  //UNCOMMENT THE EXAMPLE TO TEST THE SEED FILE!
  //EXAMPLE:

  const firstTweet = await tweets_table.create({
    text: 'Hello is it me youre looking for',
    hashtag: '#lionel',
    retweets: 42
  });
  console.log('this is firstTweet', firstTweet.dataValues);
  const secondTweet = await tweets_table.create({
    text: 'I am about to neutralize this sequelize',
    hashtag: '#programmerhumour',
    retweets: 55
  });
  console.log('this is secondTweet', secondTweet.dataValues);

} catch (error) {
  console.log('Something went wrong: ' + error);
} finally {
  process.exit();
}

}

main();
