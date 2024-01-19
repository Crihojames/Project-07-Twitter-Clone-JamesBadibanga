import { useContext } from "react";
import Avatar from "../TimeLine/Avatar"
import TweetEditorForm from "./TweetEditorForm";
import UserContext from "../../UserContext";

export default function TweetEditor() {

  const user = useContext(UserContext);

  return (
    <div className="tweet-editor">
        <Avatar src={user.profil} url={"/profil"} />
        <TweetEditorForm />
    </div>
  )
}
