import { Link, useParams } from 'react-router-dom'
import data from '../Data/data'
import Sidebar from '../components/Sidebar/Sidebar'
import TrendsProfil from '../components/Profil/TrendsProfil'
import BackButton from '../components/Buttonback'



export default function UserPage() {
  

  const useParam = useParams()
  const {id} = useParam
  const post = data.find((post) => post.id == id)
  return (
    <>
    <Sidebar />
        <div className='timeline' key={post.id}>
            <div className="header">
                <span className='back-header'>
                    <span className="back-button">
                        <Link to={'/'}><BackButton /></Link>
                    </span>
                    <h1>
                      {post.auteur}
                    </h1>
                </span>
            </div>


            <div className="image-background-profil image-background-profil-user">
                <img src={post.avatarTweet} alt="avatar" />
            </div>

            <div className="tweet">
                <div className="profil-hedear-title">
                    <div className="userprofil">
                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    <span className='tweet-title-author'>{post.titleTweet}</span>
                                    {post.certificat ? (<span><img src="/images/Vector.svg" alt="certificated" /></span>):(<span>-</span>)}
                                    <span className='tweet-title-details'>{post.detailsTitleTweet}</span>
                                    <span className='tweet-title-details'>{post.time}</span>
                                </div>
                                <div className="tweet-text">
                                    {post.textTweet}
                                </div>
                                {post.imageTweet && <span className='tweet-image'><img src={post.imageTweet} alt=""/></span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <TrendsProfil />
</>
  )
}