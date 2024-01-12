import { useState } from "react"
import tweetData from "../../Data/DataEditTweetProfil"

export default function TweetButton({ tweet, image, setTweet, setImage }) {
    const handleSubmit = () => {
        if (tweetData.text.length <= 280) {
          localStorage.setItem("tweet", JSON.stringify(tweetData))
          console.log("Tweet publié :", tweetData)
          setTweet("")
          setImage(null)
          tweetData.text = ""
          tweetData.image = null
        } else {
          console.log("Votre tweet dépasse la limite de 280 caractères.")
        }
      }

  return <button onClick={handleSubmit} className="button">Tweet</button>
}
