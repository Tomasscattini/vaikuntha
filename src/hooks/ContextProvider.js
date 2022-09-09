import React, { useCallback, useContext, useEffect, createContext, useState } from 'react';
import contentfulService from 'services/ContentfulService';
import projects from 'data/projects';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [colorScheme, setColorScheme] = useState('beige');
    const [isAppNameVisible, setIsAppNameVisible] = useState(false);
    const [isAppLogoVisible, setIsAppLogoVisible] = useState(false);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hideInitialAnimation, setHideInitialAnimation] = useState(false);
    const [location, setLocation] = useState('');
    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        setIsLoadingPosts(true);
        const response = await contentfulService.getAllPosts();
        setPosts(response?.items || []);
        setIsLoadingPosts(false);
    }, []);

    const getLocation = useCallback(async () => {
        const response = await contentfulService.getAllPosts('location');
        setLocation(response?.items?.[0]?.fields?.location || '');
    }, []);

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHideInitialAnimation(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const getProjectInfo = (id) => projects[id] || projects.default;

    const value = {
        colorScheme,
        getProjectInfo,
        getPosts,
        hideInitialAnimation,
        isAppLogoVisible,
        isAppNameVisible,
        isLoadingPosts,
        isMenuOpen,
        location,
        posts,
        setColorScheme,
        setIsAppLogoVisible,
        setIsAppNameVisible,
        setIsMenuOpen
    };

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
