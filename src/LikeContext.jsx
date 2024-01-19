import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [icon, setIcon] = useState(true);
  const [count, setCount] = useState(0);

  const changeIcon = () => {
    setIcon(!icon);
  }

  const handleClick = () => {
    setCount(prevCount => icon ? prevCount + 1 : prevCount - 1);
  }

  return (
    <LikeContext.Provider value={{ icon, count, changeIcon, handleClick }}>
      {children}
    </LikeContext.Provider>
  );
}