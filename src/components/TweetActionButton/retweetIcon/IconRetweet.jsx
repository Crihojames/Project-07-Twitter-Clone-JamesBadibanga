import React from 'react'
import { useState } from 'react';
import retweetIcon from "../../../images/Retweet.svg";
import retweetedIcon from "../../../images/retweet.png";



export default function IconRetweet({ counts }) {
  const [isRetweeted, setIsRetweeted] = useState(false)
  const [count, setCount] = useState(counts)

  const handleClick = () => {
    setIsRetweeted(!isRetweeted)
    setCount(isRetweeted ? count - 1 : count + 1)
  }

  const divStyles = {
    color: isRetweeted ? "#00ba7c" : " ",
    padding: "10px",
  }

  return (
    <div
      className="tweet-action-button-react"
      title="retweet"
      onClick={handleClick}
    >
      <img
        src={isRetweeted ? retweetedIcon : retweetIcon}
      />
      <span style={divStyles}>{count}</span>
    </div>
  )
}
