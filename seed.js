//import your models on this line
const { Tweets } = require('./models');

const main = async () => {

  // 1. Using your models, create new tweets with
  //your the data found in `data.js`. Be sure to have at least one tweet with
  //the retweets of greater than 50
  const newTweet = await Tweets.create({
    text: 'Hello',
    hashtag: '#hello',
    retweets: 4
  });
  console.log('this is newTweet', newTweet.dataValues);
};

main();
