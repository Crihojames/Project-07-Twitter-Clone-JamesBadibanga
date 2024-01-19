import { useContext } from 'react'
import { TweetContext } from '../../TweetContext'
import { Link } from 'react-router-dom'
import IconComent from '../TweetActionButton/comentIcon/IconComent'
import IconLike from '../TweetActionButton/like/IconLike'
import IconRetweet from '../TweetActionButton/retweetIcon/IconRetweet'
import IconUpload from '../TweetActionButton/uploadIcon/IconUpload'


export default function Tweet() {

    const { tweetData } = useContext(TweetContext)

  return (
    <>
        {
            tweetData.map(tweet =>(
                <div className='tweet' key={tweet.id}>
                    <div className="tweet-avatar">
                    <Link to={`/profils/${tweet.auteur}`}>
                        <img src={tweet.avatarTweet} alt="" />
                    </Link>
                    </div>
                    <div className="tweet-content">
                        <div className="tweet-body">
                            <div className="tweet-title">
                                <span className='tweet-title-author'>{tweet.auteur}</span>
                                {tweet.certificat ? (<span><img src="/images/Vector.svg" alt="certificated" /></span>):(<span>-</span>)}
                                <span className='tweet-title-details'>{tweet.detailsTitleTweet}</span>
                                <span className='tweet-title-details'>{tweet.time}</span>
                            </div>
                            <div className="tweet-text">
                                {tweet.textTweet}
                            </div>
                            {tweet.imageTweet && <span className='tweet-image'><img src={tweet.imageTweet} alt=""/></span>}
                        </div>
                        <div className="tweet-actions">
                            <IconComent counts={tweet.message} className={'tweet-action-button-reply'}/>
                            <IconRetweet counts={tweet.share} className={'tweet-action-button-retweet'}/>
                            <IconLike counts={tweet.like} className={'tweet-action-button-react'} />
                            <IconUpload counts={tweet.upload} className={'tweet-action-button-group'}/>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}
