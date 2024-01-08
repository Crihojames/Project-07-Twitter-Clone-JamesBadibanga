import Home from "../../images/Home-Fill.svg"
import Explore from "../../images/Explore.svg"
import Notifications from "../../images/Notifications.svg"
import Messages from "../../images/Messages.svg"
import Bookmarks from "../../images/Bookmarks.svg"
import Lists from "../../images/Lists.svg"
import Profile from "../../images/Profile.svg"
import More from "../../images/More.svg"
import Button from "../Button/Button"
import Navigation from "./Navigation"

export default function SidebarOptions() {
  return (
    <nav>
        <ul className="sidebarOptions">        
            <li className="lienk-navigation">
                <Navigation texte={"Home"} src={Home} url={"/"} className={"navLink"}/>
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Explore"} src={Explore} url={"/explore"} className={"navLink"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Notifications"} src={Notifications} url={"/notification"} className={"navLink"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Messages"} src={Messages} url={"/message"} className={"navLink"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Bookmarks"} src={Bookmarks} url={"/bookmarks"} className={"navLink"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Lists"} src={Lists} url={"/list"} className={"navLink"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"Profile"} src={Profile} url={"/profil"} className={"navLink"} />
            </li>
            <li className="lienk-navigation">
                <Navigation texte={"More"} src={More} url={"/more"} className={"navLink"} />
            </li>
            
            <Button value={"Tweet"} className={"button btn"} />
            
        </ul>
    </nav>
  )
}

