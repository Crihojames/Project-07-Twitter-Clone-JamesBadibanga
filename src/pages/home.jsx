import React from 'react';
import TimeLine from '../components/TimeLine/TimeLine';
import Trends from '../components/Trends/Trends';
import Sidebar from '../components/Sidebar/Sidebar';

function Home() {
  return (
    <>
      <Sidebar />
      <main className="timeline">
        <TimeLine />
      </main>
      <Trends />
    </>
  );
}

export default Home;