//import your models on this line
const { tweets_table } = require('./models');
//require sequelize and the Operator value. Check the docs, if you
//want to check the syntax for that.
const { Op } = require('sequelize');

const main = async () => {
    try {
//1. Write a sequelize query to find all the tweets.
const allDaTweets = await tweets_table.findAll();
//console.log(allDaTweets);
//2. Write a query to find the tweet with a hashtag: "#react"
const reactTweets = await tweets_table.findAll( {
        	where: {
			hashtag: '#react'
			}
        });
//console.log(reactTweets);
	

//3. Write a query to find the tweet with more than 50 retweets.

const moreRetweets = await tweets_table.findAll({
		where: {
			retweets: 
			{
				[Op.gt]: 50
			}
		}
	});
    //console.log(moreRetweets);
//4. Write a query to find the tweet with an id of 3
const tweetId = await tweets_table.findAll( {
    where: {
    id: 3
    }
});
//console.log(tweetId);
//5. Write a query to delete the tweet with an id of 3
const deleteTweet = await tweets_table.destroy( {
    where: {
    id: 3
    }
});


 } catch (error) {
    console.log('Something is not right, Shenae: ' + error);
}
// const run = async () => {
//     await main();
//     process.exit();
//   }
}  
  main();
  

//BONUS SECTION
//6. Write a query to create a new tweet with any data you want

//7. Write a query to update the hashtag of the tweet you just created
// with #sequelize

//8. Write a query to update the retweets where the text includes Brad Pitt
