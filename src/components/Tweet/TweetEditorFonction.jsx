import { useState } from "react"
import TweetInput from "./TweetEditorForm"
import TweetEditorButtons from "./TweetEditorButtons"
import TweetButton from "./TweetButton"

export default function TweetEditor() {
  const [tweet, setTweet] = useState("")
  const [image, setImage] = useState(null)

  return (
    <div>
      <TweetInput setTweet={setTweet} />
      <TweetEditorButtons setImage={setImage} />
      <TweetButton tweet={tweet} image={image} setTweet={setTweet} setImage={setImage} />
      {image && <img src={image} alt="preview" />}
      <p>{280 - tweet.length} caractères restants</p>
    </div>
  )
}
