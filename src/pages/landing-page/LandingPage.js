import React, { useLayoutEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';

import InitialAnimation from './InitialAnimation';

const LandingPage = (props) => {
    const { hideInitialAnimation, setColorScheme, setIsAppNameVisible } = useContextInfo();

    useLayoutEffect(() => {
        setColorScheme('beige');
        setIsAppNameVisible(false);
        // eslint-disable-next-line
    }, []);

    return (
        <div
            {...props}
            className="relative z-0 flex justify-center items-end h-screen overflow-hidden py-16 
                        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full 
                        after:h-full after:bg-[url('assets/images/main-header.jpg')] 
                        after:bg-center after:bg-cover after:bg-no-repeat after:animate-image-grow 
                        after:z-[-10]"
        >
            {!hideInitialAnimation && <InitialAnimation />}

            <div className="text-center">
                <h1 className="text-8xl font-bold text-green">Vaikuntha</h1>
                <p className="text-3xl text-yellow font-secondary font-semibold">
                    Arte ceramico, relatos visuales y brujerias del bien
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
