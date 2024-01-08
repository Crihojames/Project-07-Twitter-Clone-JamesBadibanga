import React from 'react'
import data from '../../Data/data'
import IconComent from '../TweetActionButton/comentIcon/IconComent'
import IconLike from '../TweetActionButton/like/IconLike'
import IconRetweet from '../TweetActionButton/retweetIcon/IconRetweet'
import IconUpload from '../TweetActionButton/uploadIcon/IconUpload'
import { Link } from 'react-router-dom'

export default function Tweet() {

  return (
    <>
        {
            data.map(tweet =>(
                <div className='tweet' key={tweet.id}>
                    <div className="tweet-avatar">
                    <Link to={`/profils/${tweet.id}`}>
                        <img src={tweet.avatarTweet} alt="" />
                    </Link>
                    </div>
                    <div className="tweet-content">
                        <div className="tweet-body">
                            <div className="tweet-title">
                                <span className='tweet-title-author'>{tweet.titleTweet}</span>
                                <span><img src={tweet.certificat} alt="certificated" /></span>
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
