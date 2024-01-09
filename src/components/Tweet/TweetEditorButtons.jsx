import TweetEditorActions from "./TweetEditorActions"
import Button from "../Button/Button"


export default function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
      <button>
        <TweetEditorActions url={"src/images/Media.svg"} />
      </button>
      <button>
        <TweetEditorActions url={"src/images/Gif.svg"} />
      </button>
      <button>
        <TweetEditorActions url={"src/images/Poll.svg"} />
      </button>
      <button>
        <TweetEditorActions url={"src/images/Group.svg"} />
      </button>
      <button>
        <TweetEditorActions url={"src/images/Schedule.svg"} />
      </button>
      </div>
        <Button value={"Tweet"} className={"button"}/>
    </div>
  )
}
