import React, { useContext, createContext, useState } from 'react';
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const sectionOptions = {
        header: 'header',
        footer: 'footer'
    };
    const [section, setSection] = useState(sectionOptions.header);

    const value = {
        section,
        sectionOptions,
        setSection
    };

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
