import PageTitle from "./PageTitle"
import TopTweets from "./TopTweets"


export default function Header() {
  return (
    <div className="header">
        <PageTitle texte={"Home"} />
        <TopTweets />
    </div>
  )
}
