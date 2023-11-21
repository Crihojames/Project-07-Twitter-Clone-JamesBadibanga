import React from 'react';
import TweetBody from './tweet content/TweetBody';
import TweetActions from './tweet content/TweetActions';

const TweetContent = () => {
    return (
        <div className='tweet-content'>
            <TweetBody />
            <TweetActions />
        </div>
    );
};

export default TweetContent;