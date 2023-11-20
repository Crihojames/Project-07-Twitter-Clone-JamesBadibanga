import React from 'react';
import Header from '../components/entête/Header';
import TweetEditor from '../components/editeur de tweets/TweetEditor';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor/>
    </main>
  );
}

export default Home;