import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { useNavigate } from 'react-router-dom';

import InitialAnimation from './InitialAnimation';
import { Logo } from 'components';

const LandingPage = (props) => {
    const { hideInitialAnimation, setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();
    const navigate = useNavigate();
    const bodyRef = useRef();

    useLayoutEffect(() => {
        setColorScheme('beige');
        setIsAppLogoVisible(false);
        setIsAppNameVisible(false);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const $currentBodyRef = bodyRef.current;
        if ($currentBodyRef)
            $currentBodyRef.addEventListener('scroll', (ev) => {
                navigate('/acerca');
            });
        return () => $currentBodyRef?.removeEventListener('scroll', () => {});
    }, [navigate]);

    return (
        <div
            {...props}
            ref={bodyRef}
            className="relative z-0 h-screen overflow-x-hidden overflow-y-scroll
                        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full 
                        after:h-full after:bg-[url('assets/images/main-header.jpg')] 
                        after:bg-center after:bg-cover after:bg-no-repeat after:animate-image-grow 
                        after:z-[-10]"
        >
            {!hideInitialAnimation && <InitialAnimation />}
            <div className="flex justify-center items-center md:items-end h-[101vh] py-16 ">
                <div className="text-center">
                    <Logo className="w-40 h-40 md:w-60 md:h-60 mx-auto mb-[5vh]" color="beige" />
                    <h1 className="text-7xl md:text-9xl font-bold text-beige uppercase">Vaikuntha</h1>
                    <p className="text-2xl md:text-3xl text-beige font-secondary font-bold">
                        Arte ceramico, relatos visuales y brujerias del bien
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
