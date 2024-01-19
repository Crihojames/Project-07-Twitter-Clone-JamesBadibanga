import TweetEditorActions from "./TweetEditorActions"
import Button from "../Button/Button"


export default function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
        <TweetEditorActions url={"/images/Media.svg"} />
        <TweetEditorActions url={"/images/Gif.svg"} />
        <TweetEditorActions url={"/images/Poll.svg"} />
        <TweetEditorActions url={"/images/Group.svg"} />
        <TweetEditorActions url={"/images/Schedule.svg"} />
      </div>
        <Button value={"Tweet"} className={"button"}/>
    </div>
  )
}
