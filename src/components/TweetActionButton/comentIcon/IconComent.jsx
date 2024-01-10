import React from 'react'
import { useState } from 'react';
import comment1 from "../../../images/reply.svg";
import comment2 from "../../../images/reply.png";


export default function IconComent({className,counts}) {
  const [isLiked, setIsLiked] = useState(false)
  const [count, setCount] = useState(counts)

  const handleClick = () => {
    setIsLiked(!isLiked)
    setCount(isLiked ? count - 1 : count + 1)
  }

  const divStyles = {
    color: isLiked ? "#1D9BF0" : " ",
    padding: "10px",
  }

  return (
    <div
      className="tweet-action-button-react"
      title="like"
      onClick={handleClick}
    >
      <img
        src={isLiked ? comment2 : comment1}
      />
      <span style={divStyles}>{count}</span>
    </div>
  )
}
