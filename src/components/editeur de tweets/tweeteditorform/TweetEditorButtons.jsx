import React from 'react';
import Button from './tweeteditorbuttons/Button';
import TweetEditorAction from './tweeteditorbuttons/TweetEditorAction';


const TweetEditorButtons = () => {
    return (
        <div className='tweet-editor-buttons'>
            <TweetEditorAction/>
            <Button/>
        </div>
    );
};

export default TweetEditorButtons;