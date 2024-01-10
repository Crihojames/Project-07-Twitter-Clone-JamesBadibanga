import { useState } from "react"

const reacts = "src/images/React.svg"
const liked = "src/images/Liked.svg"

export default function IconLike({ counts }) {
  const [isLiked, setIsLiked] = useState(false)
  const [count, setCount] = useState(counts)

  const handleClick = () => {
    setIsLiked(!isLiked)
    setCount(isLiked ? count - 1 : count + 1)
  }

  const divStyles = {
    color: isLiked ? "red" : " ",
    padding: "10px",
  }

  return (
    <div
      className="tweet-action-button-react"
      title="like"
      onClick={handleClick}
    >
      <img
        src={isLiked ? liked : reacts}
      />
      <span style={divStyles}>{count}</span>
    </div>
  )
}
