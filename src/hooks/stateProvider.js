import React, { useContext, createContext, useState } from "react";

const ListContext = createContext();
export const useList = () => useContext(ListContext);

export const StateProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [stick, setStick] = useState(false);
  const [contactClick, setContactClick] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);
  const [active, setActive] = useState("about");
  const [hover, setHover] = useState(false);

  return (
    <ListContext.Provider
      value={{
        dark,
        setDark,
        contactClick,
        setContactClick,
        stick,
        setStick,
        viewMenu,
        setViewMenu,
        active,
        setActive,
        hover,
        setHover
      }}>
      {children}
    </ListContext.Provider>
  );
};
