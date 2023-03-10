import React, { useState, useContext } from "react";
import navLinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({ page: "", pageUrl: "", links: [] });
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openSubmenu = (text, coordinates) => {
        const page = navLinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const contextValues = {
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
    };

    return (
        <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
    );
};

// my custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
