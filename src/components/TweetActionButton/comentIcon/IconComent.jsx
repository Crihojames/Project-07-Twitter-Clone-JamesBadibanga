import React from 'react'
import { useState } from 'react';
import commentIcon from "../../../images/reply.svg";
import commentedIcon from "../../../images/reply.png";


export default function IconComment({ counts }) {
  const [isCommented, setIsCommented] = useState(false)
  const [count, setCount] = useState(counts)

  const handleClick = () => {
    setIsCommented(!isCommented)
    setCount(isCommented ? count - 1 : count + 1)
  }

  const divStyles = {
    color: isCommented ? "#1D9BF0" : " ",
    padding: "10px",
  }

  return (
    <div
      className="tweet-action-button-react"
      title="comment"
      onClick={handleClick}
    >
      <img
        src={isCommented ? commentedIcon : commentIcon}
      />
      <span style={divStyles}>{count}</span>
    </div>
  )
}