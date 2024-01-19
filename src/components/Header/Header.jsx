import PageTitle from "./PageTitle"
import TopTweets from "./TopTweets"
import UserContext from "../../UserContext"
import { useContext } from "react"

export default function Header() {

  const user = useContext(UserContext)
  return (
    <div className="header">
        <PageTitle texte={user.name} />
        <TopTweets />
    </div>
  )
}
