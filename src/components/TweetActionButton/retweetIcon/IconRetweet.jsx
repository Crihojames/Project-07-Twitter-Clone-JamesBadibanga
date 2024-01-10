import React from 'react'
import { useState } from 'react';
import retweet1 from "../../../images/Retweet.svg";
import retweet2 from "../../../images/retweet.png";


export default function IconRetweet({className,counts}) {
  const [isLiked, setIsLiked] = useState(false)
  const [count, setCount] = useState(counts)

  const handleClick = () => {
    setIsLiked(!isLiked)
    setCount(isLiked ? count - 1 : count + 1)
  }

  const divStyles = {
    color: isLiked ? "#00ba7c" : " ",
    padding: "10px",
  }

  return (
    <div
      className="tweet-action-button-react"
      title="like"
      onClick={handleClick}
    >
      <img
        src={isLiked ? retweet2 : retweet1}
      />
      <span style={divStyles}>{count}</span>
    </div>
  )
}
