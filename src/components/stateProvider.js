import React, { useContext, createContext, useState } from "react";

const ListContext = createContext();
export const useList = () => useContext(ListContext);

export const StateProvider = ({ children }) => {
    const [dark, setDark] = useState(true);
    const [stick, setStick] = useState(false);
    const [contactClick, setContactClick] = useState(false);

    return (
        <ListContext.Provider
            value={{
                dark,
                setDark,
                contactClick,
                setContactClick,
                stick,
                setStick,
            }}>
            {children}
        </ListContext.Provider>
    );
};
