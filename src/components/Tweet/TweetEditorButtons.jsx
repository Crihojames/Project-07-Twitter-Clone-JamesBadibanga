import TweetEditorActions from "./TweetEditorActions"
import Button from "../Button/Button"


export default function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
        <TweetEditorActions url={"src/images/Media.svg"} />
        <TweetEditorActions url={"src/images/Gif.svg"} />
        <TweetEditorActions url={"src/images/Poll.svg"} />
        <TweetEditorActions url={"src/images/Group.svg"} />
        <TweetEditorActions url={"src/images/Schedule.svg"} />
      </div>
        <Button value={"Tweet"} className={"button"}/>
    </div>
  )
}
