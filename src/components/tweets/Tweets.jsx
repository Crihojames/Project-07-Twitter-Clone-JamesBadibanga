import React from 'react';
import TweetAvatar from './tweets components/TweetAvatar';
import TweetContent from './tweets components/TweetContent';


const Tweets = () => {
    return (
        <>
        <div className='tweet'>
            <TweetAvatar />
            <TweetContent />
        </div>
        </>
    );
};

export default Tweets;