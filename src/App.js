import React, { useState, useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    gsap.registerPlugin(ScrollTrigger);

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
                <Route path="/" exact element={<LandingPage gsap={gsap} />} />
                <Route path="/acerca" exact element={<AboutPage gsap={gsap} />} />
                <Route path="/contacto" exact element={<ContactPage gsap={gsap} />} />
                <Route path="/proyectos" exact element={<ProjectsPage gsap={gsap} />} />
                <Route path="/proyectos/entre-mujeres-y-el-barro" exact element={<EntreMujeresPage gsap={gsap} />} />
                <Route path="/proyectos/taller-adentro" exact element={<TallerAdentroPage gsap={gsap} />} />
                <Route path="/proyectos/relatos-visuales" exact element={<RelatosVisualesPage gsap={gsap} />} />
                <Route path="/bitacora" exact element={<PostsListPage gsap={gsap} />} />
                <Route path="/bitacora/:id" element={<PostDetailsPage gsap={gsap} />} />
                <Route path="*" element={<ErrorPage gsap={gsap} />} />
            </Routes>
        </div>
    );
};

export default App;
