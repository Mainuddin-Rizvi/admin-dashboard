import { createContext, useContext, useState } from "react";
import React from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsCLicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setIsCLicked({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsCLicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
