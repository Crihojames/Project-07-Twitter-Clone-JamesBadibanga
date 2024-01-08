import PageTitle from "../Header/PageTitle"
import ProfilImage from "../../images/profile-photo.png"
import Tweet from "../Tweet/Tweet"
import ProfilNavigation from "./ProfilNavigation"


function Info() {
  return (
    <div className="timeline">
        <div className="header">
            <PageTitle texte={"Profil"} />
        </div>
        <div className="image-background-profil">
          <img src={ProfilImage} alt="" />
        </div>
        <div className="profil-news">
          <button className="profil-button">Edit profile</button>
          <div className="profil-hedear-title">
            <h3>Bradly Ortiz</h3>
            <span className="tweet-title-details">@badly</span>
          </div>
          <p>President Joe Biden a new agreement reached with the European union to ease Trume era tariffs on aluminum and steel as a 'major breakthough' that would service to both strengthen the US</p>
          <div className="profil-follow">
            <span className="tweet-title-details">13 Following</span>
            <span className="tweet-title-details">130 Follower</span>
          </div>
          <div className="sub-menu">
              <ProfilNavigation />
          </div>
        </div>
      <Tweet />  
    </div>
  )
}

export default Info