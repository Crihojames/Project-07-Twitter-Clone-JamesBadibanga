import React from 'react';
import TweetTittle from './tweetBody/TweetTittle';
import TweetText from './tweetBody/TweetText';
import TweetImage from './tweetBody/TweetImage';

const TweetBody = () => {
    return (
        <div className='tweet-body'>
        <TweetTittle/>
        <TweetText/>
        <TweetImage/>
            
        </div>
    );
};

export default TweetBody;