import React from 'react';
import Header from '../components/entête/Header';
import TweetEditor from '../components/editeur de tweets/TweetEditor';
import Tweets from '../components/tweets/Tweets';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor/>
      <Tweets/>
    </main>
  );
}

export default Home;