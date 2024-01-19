// TweetContext.js
import React, { createContext, useState } from 'react';
import initialData from "./Data/initial-data.json"

export const TweetContext = createContext();

export const TweetProvider = ({children}) => {

  const initialDataTweet = initialData.tweet

  const [tweetData, setTweetData] = useState(initialDataTweet);

  return (
    <TweetContext.Provider value={{ tweetData, setTweetData }}>
      {children}
    </TweetContext.Provider>
  );
};
