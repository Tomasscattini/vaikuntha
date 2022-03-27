import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';

import { Menu } from 'components';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const { section, sectionOptions } = useContextInfo();

    return (
        <div className="fixed w-screen h-16 top-0 left-0 z-10 flex justify-between items-center px-8">
            {section === sectionOptions.header ? (
                <div className="text-beige">logo_beige</div>
            ) : (
                <div className="text-darkGreen">logo_green</div>
            )}
            {section !== sectionOptions.header && (
                <div>
                    <h1 className="text-[3rem]">
                        <HashLink to="/#top">Vaikuntha</HashLink>
                    </h1>
                </div>
            )}
            <Menu color={section === sectionOptions.header ? 'white' : 'green'} />
        </div>
    );
};

export default Navbar;
