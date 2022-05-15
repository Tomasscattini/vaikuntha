import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';

import { Logo, Menu } from 'components';

const Navbar = () => {
    const { colorScheme, isAppLogoVisible, isAppNameVisible } = useContextInfo();

    const colors = {
        beige: 'text-beige',
        green: 'text-green',
        yellow: 'text-yellow',
        orange: 'text-orange',
        default: 'text-green'
    };
    const text = colors[colorScheme] || colors.default;

    return (
        <div className="absolute w-screen top-0 left-0 z-40 flex justify-between items-center px-8">
            {isAppLogoVisible ? (
                <Link to="/">
                    <Logo className="w-16 h-16 mt-8" color={colorScheme} />
                </Link>
            ) : (
                <span></span>
            )}
            {isAppNameVisible && (
                <div>
                    <h1 className={clsx(text, 'text-[3rem] transition-all duration-500 lowercase font-medium')}>
                        <Link to="/">Vaikuntha</Link>
                    </h1>
                </div>
            )}
            <Menu color={colorScheme} />
        </div>
    );
};

export default Navbar;
