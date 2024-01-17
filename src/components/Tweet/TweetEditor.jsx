import Avatar from "../TimeLine/Avatar"
import TweetEditorForm from "./TweetEditorForm"

export default function TweetEditor() {
  return (
    <div className="tweet-editor">
        <Avatar src={"/images/profile-photo.png"} url={"/profil"} />
        <TweetEditorForm />
    </div>
  )
}
