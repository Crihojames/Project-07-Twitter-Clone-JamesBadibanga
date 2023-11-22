import React from "react"
import Data from "../data/DataApi"
// import TweetAction from "./TweetAction"

const Tweets = () => {
  return (
    <>
      {Data.map((tweet) => (
        <div
          className="tweet"
          key={tweet.id}
        >
          <div className="tweet-avatar">
            <img
              src={tweet.avatar}
              alt=""
            />
          </div>

          <div className="tweet-content">
            <div className="tweet-body">
              <div className="tweet-title">{tweet.titleTweet}</div>
              <div className="tweet-text"></div>
              <div className="tweet-image"></div>
            </div>
            <div className="tweet-actions">
                {/* <TweetAction url={"src\images\profile-photo.png"} /> */}
              <span className="tweet-action"><img src="src/images/Media.svg" alt=""  />{tweet.commentary}</span>
              <span className="tweet-action"><img src="src/images/Media.svg" alt=""  />{tweet.commentary}</span>
              <span className="tweet-action"><img src="src/images/Media.svg" alt=""  />{tweet.commentary}</span>
              <span className="tweet-action"><img src="src/images/Media.svg" alt=""  />{tweet.commentary}</span>
              
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Tweets
