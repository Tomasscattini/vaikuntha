import React, { useRef, useEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';

import Footer from './sections/Footer';
import MainHeader from './sections/MainHeader';

const LandingPage = () => {
    const { sectionOptions, setSection } = useContextInfo();

    const footerRef = useRef();
    const headerRef = useRef();

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (headerRef?.current) {
                const headerBottom = headerRef.current?.getBoundingClientRect()?.bottom;
                if (headerBottom <= 50) setSection(sectionOptions.footer);
                else setSection(sectionOptions.header);
            }
        });
        return () => document.removeEventListener('scroll', () => {});
    }, [headerRef]);

    return (
        <div>
            <MainHeader ref={headerRef} />
            <Footer ref={footerRef} />
        </div>
    );
};

export default LandingPage;
