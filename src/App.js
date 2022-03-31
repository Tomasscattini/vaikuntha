import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AboutPage, ContactPage, GalleryPage, LandingPage, ProjectsPage } from 'pages';

const App = () => {
    return (
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/contact" exact element={<ContactPage />} />
            <Route path="/gallery" exact element={<GalleryPage />} />
            <Route path="/projects" exact element={<ProjectsPage />} />
        </Routes>
    );
};

export default App;
