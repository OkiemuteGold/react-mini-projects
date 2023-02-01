import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="Hello World">
        {children}
    </AppContext.Provider>
}

// my custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };