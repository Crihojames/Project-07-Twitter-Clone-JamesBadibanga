import React from 'react';
import Avatar from './Avatar';
import TweetEditorForm from './TweetEditorForm';

const TweetEditor = () => {
    return (
        <div className='tweet-editor'>
            <Avatar/>
            <TweetEditorForm/>
        </div>
    );
};

export default TweetEditor;
