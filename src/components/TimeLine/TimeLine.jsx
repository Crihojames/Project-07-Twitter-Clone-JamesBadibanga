import Header from "../Header/Header"
import TweetEditor from "../Tweet/TweetEditor"
import Tweets from "../Tweet/Tweets"


export default function TimeLine() {
  return (
    <div className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </div>
  )
}
