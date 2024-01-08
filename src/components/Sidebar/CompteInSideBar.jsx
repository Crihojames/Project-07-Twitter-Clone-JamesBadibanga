import Avatar from "../TimeLine/Avatar"
import More2 from "../../images/More-2.svg"

export default function CompteInSideBar() {
  return (
    <div className='compte-in-sidebar'>
        <div className="compte-in-sidebar-avatar"><Avatar /></div>
        <div>
            <div className="compte-icon">
                <p>Bradly Ortiz</p>
                <img src={More2} alt="" />
            </div>
            <span className="tweet-title-details">@bradly</span>
        </div>
    </div>
  )
}
