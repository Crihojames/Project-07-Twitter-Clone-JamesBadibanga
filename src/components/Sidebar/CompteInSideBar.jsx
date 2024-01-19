import { useContext } from "react";
import Avatar from "../TimeLine/Avatar"
import UserContext from "../../UserContext"
import GroupCADENA from "/images/GroupCADENA.svg"


export default function CompteInSideBar() {

  const user = useContext(UserContext);
  return (
    <>
      {
         <div className='compte-in-sidebar'>
            <div className="compte-in-sidebar-avatar"><Avatar src={user.profil} url={"/profil"}/></div>
            <div className="title-icon">
              <div className="compte-icon">
                <p>{user.name}</p>
                <img src={GroupCADENA} alt="" />
              </div>
              <span className="tweet-title-details">{user.subname}</span>
            </div>
            <div className="compMortIcon"><img src="images\More-2.svg" alt="" /></div>
          </div>
      }
    </>
  )
}
