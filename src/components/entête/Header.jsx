import React from 'react';
import PageTitle from './PageTitle';
import TopTweets from './TopTweets';

const Header = () => {
    return (
        <div className='header'>
        <PageTitle/>
        <TopTweets />
        </div>
    );
};

export default Header;