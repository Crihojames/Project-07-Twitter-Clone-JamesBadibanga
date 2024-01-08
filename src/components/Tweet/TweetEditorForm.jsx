import TweetEditorButtons from "./TweetEditorButtons"


export default function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
        <form method="" action="">
            <input 
                type="text" 
                placeholder="What's happening ?" 
                className="tweet-editor-input" 
            />
            <TweetEditorButtons />
        </form>
    </div>
  )
}
