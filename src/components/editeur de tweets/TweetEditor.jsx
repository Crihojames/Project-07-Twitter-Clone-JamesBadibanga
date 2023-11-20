import React from 'react';
import Avatar from './avatar';
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