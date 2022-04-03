import React, { useCallback, useContext, useEffect, createContext, useState } from 'react';
import contentfulService from 'services/ContentfulService';
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [colorScheme, setColorScheme] = useState('beige');
    const [isAppNameVisible, setIsAppNameVisible] = useState(false);
    const [isLoadingRelatos, setIsLoadingRelatos] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hideInitialAnimation, setHideInitialAnimation] = useState(false);
    const [relatosVisuales, setRelatosVisuales] = useState([]);

    const getRelatos = useCallback(async () => {
        setIsLoadingRelatos(true);
        const response = await contentfulService.getAllPosts();
        setRelatosVisuales(response?.items || []);
        setIsLoadingRelatos(false);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHideInitialAnimation(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const value = {
        colorScheme,
        getRelatos,
        hideInitialAnimation,
        isAppNameVisible,
        isLoadingRelatos,
        isMenuOpen,
        relatosVisuales,
        setColorScheme,
        setIsAppNameVisible,
        setIsMenuOpen
    };

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
