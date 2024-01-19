import { Link, useParams} from 'react-router-dom'
import { useContext } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import TrendsProfil from '../components/Profil/TrendsProfil'
import BackButton from '../components/backButton'
import ProfilNavigation from '../components/Profil/ProfilNavigation'
import IconComent from '../components/TweetActionButton/comentIcon/IconComent'
import IconLike from '../components/TweetActionButton/like/IconLike'
import IconRetweet from '../components/TweetActionButton/retweetIcon/IconRetweet'
import IconUpload from '../components/TweetActionButton/uploadIcon/IconUpload'
import { TweetContext } from '../TweetContext'





export default function UserPage() {
  
  const { tweetData } = useContext(TweetContext)  
  const {auteur} = useParams()
  const post = tweetData.find((post) => post.auteur == auteur)
  const filtrer = tweetData.filter(filtre => filtre.auteur == post.auteur)

  console.log(filtrer);
  return (
    <>
        <Sidebar />
        <div className='timeline' key={post.id}>
            <div className="header">
                <span className='back-header'>
                    <span className="back-button">
                        <Link to={'/'}><BackButton /></Link>
                    </span>
                    <h1>{post.auteur}</h1>
                </span>
            </div>
            <div className="image-background-profil image-background-profil-user">
                <img src={post.avatarTweet} alt="avatar" />
            </div>
            <div className="profil-news">
                <button className="profil-button">Edit profile</button>
                <div className="profil-hedear-title">
                    <div className="profil-headear-title-space">
                        <h3>{post.auteur}</h3>
                        <span>{post.certificat ? (<span><img src="/images/Vector.svg" alt="certificated" /></span>):(<span>-</span>)}</span>
                    </div>
                    <span className="tweet-title-details">{post.detailsTitleTweet}</span>
                </div>
                <p className='profil-hedear-description'>President Joe Biden a new agreement reached with the European union to ease Trume era tariffs on aluminum and steel as a 'major breakthough' that would service to both strengthen the US</p>
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
        <TrendsProfil />
    </>
  )
}