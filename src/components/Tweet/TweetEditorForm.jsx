import TweetEditorButtons from "./TweetEditorButtons"
import { useState } from "react"



export default function TweetEditorForm() {


  const [post, setPost] = useState("");
  const [dataList, setDataList] = useState([]);;

  const handleInputChange = (e) => {
    setPost(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPost = {
      id: Date.now(),
      post: post
    }
    setDataList([...dataList, newPost]);
    setPost('')
    console.log(newPost)
  }
  return (
    <div className="tweet-editor-form" id="tweetEditor">
        <form  onSubmit={handleSubmit}>
            <textarea
                type="text" 
                placeholder="What's happening ?" 
                className="tweet-editor-input"
                value={post}
                onChange={handleInputChange} 
            />
            <TweetEditorButtons />
        </form>
    </div>
  )
}