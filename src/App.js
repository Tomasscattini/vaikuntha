import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
    AboutPage,
    ContactPage,
    GalleryPage,
    LandingPage,
    ProjectsPage,
    RelatosVisualesPage,
    RelatosVisualesDetailsPage
} from 'pages';

const App = () => {
    return (
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/contact" exact element={<ContactPage />} />
            <Route path="/gallery" exact element={<GalleryPage />} />
            <Route path="/projects" exact element={<ProjectsPage />} />
            <Route path="/relatos-visuales" exact element={<RelatosVisualesPage />} />
            <Route path="/relatos-visuales/:id" element={<RelatosVisualesDetailsPage />} />
        </Routes>
    );
};

export default App;
