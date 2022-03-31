import React, { useContext, useEffect, createContext, useState } from 'react';
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [colorScheme, setColorScheme] = useState('beige');
    const [isAppNameVisible, setIsAppNameVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hideInitialAnimation, setHideInitialAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHideInitialAnimation(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const value = {
        colorScheme,
        hideInitialAnimation,
        isAppNameVisible,
        isMenuOpen,
        setColorScheme,
        setIsAppNameVisible,
        setIsMenuOpen
    };

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
