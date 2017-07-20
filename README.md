# NodeBR 2017-07-13 Meetup Code Samples

This code tries to model a hypotetical problem from someone:

````
"I need to get the last ten tweets with a specific hashtag, discover the sentiment about the tweets and save for further analysis."

````

To run this code you will need to have:
- Node.js 8.1.4
- Yarn package manager
- Docker (with docker-compose installed)

### How to start the app

First, run `yarn install` on the root folder of this code, giving the following output:

````

➜  nodebr-meetup-ddd-demo git:(master) ✗ yarn install
yarn install v0.24.6
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.54s.

````

After that, start a sample postgres database on Docker running: `docker-compose up -d`, giving the following results:

````

➜  nodebr-meetup-ddd-demo git:(master) ✗ docker-compose up -d
Starting nodebrmeetupddddemo_postgres_1 ...
Starting nodebrmeetupddddemo_postgres_1 ... done

````

Finally, just run `yarn start` to run the application locally.

````

➜  nodebr-meetup-ddd-demo git:(master) ✗ yarn start
yarn start v0.24.6
$ NODE_ENV=development NODE_PATH=./ nodemon Infra/api/server.js
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node Infra/api/server.js`
Connected to database tweets on localhost:5432
Scup Care Billing Api is running on port 8000

````

### Execute the use case proposed here

Just enter in http://localhost:8000/graphiql in your browser, and paste the following code in console:

````

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

````

Pressing the play button, you can exec one of the commands:

- RetrieveTweetsFromTwitter: executes the described process
- LookupTweets: see the saved tweets with a registered sentiment

### Remarks

Just remember that this is a sample of a code with the DDD theory with some adaptations.

Feel free to contact me in case of any questions at danielbpdias at gmail dot com.
