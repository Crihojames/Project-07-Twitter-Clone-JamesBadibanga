import TweetEditorButtons from "./TweetEditorButtons"
import { useState } from "react"


export default function TweetInput({ setTweet }) {
  const handleInputChange = (event) => {
    setTweet(event.target.value)
  }

  return (
    <div className="tweet-editor-form">
            <textarea onChange={handleInputChange} placeholder="What's happening ?" className="tweet-editor-input" />
            <TweetEditorButtons />
    </div>
  )
}


// export default function TweetInput({ setTweet }) {
//   const handleInputChange = (event) => {
//     setTweet(event.target.value)
//   }

//   return 
// }
// <input 
//                 type="text" 
//                 placeholder="What's happening ?" 
                
//             />