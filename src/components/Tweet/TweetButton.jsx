import { useState } from "react"

export default function TweetButton({ tweet, image, setTweet, setImage }) {
  const handleSubmit = () => {
    if (tweet.length <= 280) {
      const tweetData = { text: tweet, image: image }
      localStorage.setItem("tweet", JSON.stringify(tweetData))
      console.log("Tweet publié :", tweetData)
      setTweet("")
      setImage(null)
    } else {
      console.log("Votre tweet dépasse la limite de 280 caractères.")
    }
  }

  return <button onClick={handleSubmit} className="button">Tweet</button>
}
