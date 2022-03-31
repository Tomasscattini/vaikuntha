import React, { useLayoutEffect, useState } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';

import AboutHeader from './AboutHeader';
import AboutSummary from './AboutSummary';
import AboutMore from './AboutMore';

const About = () => {
    const { setColorScheme, setIsAppNameVisible } = useContextInfo();
    const [isAnimationRunning, setIsAnimationRunning] = useState(true);

    useLayoutEffect(() => {
        setColorScheme('yellow');
        setIsAppNameVisible(true);
        const timer = setTimeout(() => {
            setColorScheme('green');
        }, [800]);

        const timer2 = setTimeout(() => {
            setIsAnimationRunning(false);
        }, [2000]);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div
            className={`${isAnimationRunning && 'h-screen overflow-hidden'} relative w-screen min-h-screen pt-28
                        after:content-[''] after:fixed after:top-0 after:left-0 
                        after:w-full after:h-full after:bg-[url('assets/images/about-bg.jpg')]
                        after:bg-center after:bg-cover after:bg-no-repeat after:animate-fade-linear 
                        after:z-10`}
        >
            <AboutHeader />

            <AboutSummary />

            <AboutMore />
        </div>
    );
};

export default About;
