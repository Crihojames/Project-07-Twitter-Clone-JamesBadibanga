import React from 'react';
import TweetEditorInput from './tweeteditorform/TweetEditorInput';
import TweetEditorButtons from './tweeteditorform/TweetEditorButtons';

const TweetEditorForm = () => {
    return (
        <div className='tweet-editor-form'>
            <TweetEditorInput/>
            <TweetEditorButtons/>
        </div>
    );
};

export default TweetEditorForm;