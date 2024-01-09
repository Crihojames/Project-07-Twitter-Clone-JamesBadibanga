import Avatar from "../TimeLine/Avatar"
import GroupCADENA from "../../images/GroupCADENA.svg"
// import More-2 from "../../images/More-2.svg"

export default function CompteInSideBar() {
  return (
    <div className='compte-in-sidebar'>
        <div className="compte-in-sidebar-avatar"><Avatar /></div>
        <div className="title-icon">
            <div className="compte-icon">
                <p>Bradly Ortiz</p>
                <img src={GroupCADENA} alt="" />
            </div>
            <span className="tweet-title-details">@bradly</span>
        </div>
        <div className="compMortIcon"><img src="src\images\More-2.svg" alt="" /></div>
    </div>
  )
}
