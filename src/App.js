import React, { useState, useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';

import {
    AboutPage,
    ContactPage,
    EntreMujeresPage,
    ErrorPage,
    LandingPage,
    PostDetailsPage,
    PostsListPage,
    ProjectsPage,
    RelatosVisualesPage,
    TallerAdentroPage
} from 'pages';

const App = () => {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState('fadeIn');

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage('fadeOut');
    }, [location, displayLocation]);

    return (
        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === 'fadeOut') {
                    setTransistionStage('fadeIn');
                    setDisplayLocation(location);
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route path="/" exact element={<LandingPage />} />
                <Route path="/acerca" exact element={<AboutPage />} />
                <Route path="/contacto" exact element={<ContactPage />} />
                <Route path="/proyectos" exact element={<ProjectsPage />} />
                <Route path="/proyectos/entre-mujeres-y-el-barro" exact element={<EntreMujeresPage />} />
                <Route path="/proyectos/taller-adentro" exact element={<TallerAdentroPage />} />
                <Route path="/proyectos/relatos-visuales" exact element={<RelatosVisualesPage />} />
                <Route path="/bitacora" exact element={<PostsListPage />} />
                <Route path="/bitacora/:id" element={<PostDetailsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default App;
