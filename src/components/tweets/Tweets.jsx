import React from "react"
import Data from "../data/DataApi"
// import TweetAction from "./TweetAction"

const Tweets = () => {
  return (
    <>
      {Data.map((tweet, index) => (
        <div
          className="tweet"
          key={index}
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
              <div className="tweet-text">{tweet.textTweet}</div>
              <div className="tweet-image"><img src={tweet.ImageTweet} alt="" /></div>
            </div>
            <div className="tweet-actions">
                {/* <TweetAction url={"src\images\profile-photo.png"} /> */}
              <span className="tweet-action"><img src="src\images\Reply.svg" alt=""  />{tweet.commentary}</span>
              <span className="tweet-action"><img src="src\images\Retweet.svg" alt=""  />{tweet.reTweet}</span>
              <span className="tweet-action"><img src="src\images\React.svg" alt=""  />{tweet.like}</span>
              <span className="tweet-action"><img src="src\images\Group1.svg" alt=""  />{tweet.share}</span>
              
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Tweets
