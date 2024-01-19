import PageTitle from "../Header/PageTitle"
import ProfilNavigation from "./ProfilNavigation"
import { useContext } from "react"
import UserContext from "../../UserContext"
import { Link } from "react-router-dom"
import BackButton from "../backButton"
import { TweetContext } from "../../TweetContext"
import IconComent from "../TweetActionButton/comentIcon/IconComent"
import IconLike from "../TweetActionButton/like/IconLike"
import IconRetweet from "../TweetActionButton/retweetIcon/IconRetweet"
import IconUpload from "../TweetActionButton/uploadIcon/IconUpload"

function Info() {

  const { tweetData } = useContext(TweetContext)
  const user = useContext(UserContext)
  const filtrer = tweetData.filter(filtre => filtre.auteur == user.name)
  
  return (
    <div className="timeline">
        <div className="header">
          <span className='back-header'>
            <span className="back-button">
              <Link to={'/'}><BackButton /></Link>
            </span>
              <h1>
                <PageTitle texte={user.name} />
              </h1>
          </span>
        </div>
        <div className="image-background-profil">
          <img src={user.profil} alt="" />
        </div>
        <div className="profil-news">
          <button className="profil-button">Edit profile</button>
          <div className="profil-hedear-title">
            <h3>{user.name}</h3>
            <span className="tweet-title-details">{user.subname}</span>
          </div>
          <p>{user.domain}</p>
          <div className="profil-follow">
            <span><span className="tweet-title-details">13 </span><span>Following</span></span>
            <span><span className="tweet-title-details">130 </span><span>Follower</span></span>
          </div>
          <div className="sub-menu">
              <ProfilNavigation />
          </div>
        </div>
        {
          filtrer.map(posts => (
            <div className="tweet">
              <div className="tweet-avatar">
                <img src={posts.avatarTweet} alt="" />
              </div>
              <div className="profil-hedear-title">
                <div className="tweet-content">
                  <div className="tweet-body">
                    <div className="tweet-title">
                      <span className='tweet-title-author'>{posts.auteur}</span>
                        {posts.certificat ? (<span><img src="/images/Vector.svg" alt="certificated" /></span>):(<span>-</span>)}
                        <span className='tweet-title-details'>{posts.detailsTitleTweet}</span>
                        <span className='tweet-title-details'>{posts.time}</span>
                    </div>
                    <div className="tweet-text">
                      {posts.textTweet}
                    </div>
                    {posts.imageTweet && <span className='tweet-image'><img src={posts.imageTweet} alt=""/></span>}
                  </div>
                  <div className="tweet-actions">
                    <IconComent counts={posts.message} className={'tweet-action-button-reply'}/>
                    <IconRetweet counts={posts.share} className={'tweet-action-button-retweet'}/>
                    <IconLike counts={posts.like} className={'tweet-action-button-react'} />
                    <IconUpload counts={posts.upload} className={'tweet-action-button-group'}/>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Info