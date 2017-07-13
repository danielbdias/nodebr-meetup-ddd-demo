# NodeBR 2017-07-13 Meetup Code Samples

I need to get the last ten tweets with a specific hashtag, discover the sentiment about the tweets and save for further analysis.

mutation RetrieveTweetsFromTwitter {
  retrieveTweets(hashtag: "nodejs", tweetsToRetrieve: 10)
}

query LookupTweets {
  tweets {
    text,
    sentiment,
    author,
    published
  }
}
