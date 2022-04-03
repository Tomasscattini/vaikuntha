import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { AiOutlineClose } from 'react-icons/ai';
import { useContextInfo } from 'hooks/ContextProvider';

import { Logo } from 'components';

const Button = ({ color, ...props }) => {
    const colors = {
        beige: 'bg-beige',
        green: 'bg-green',
        yellow: 'bg-yellow',
        orange: 'bg-orange',
        default: 'bg-green'
    };
    const bg = colors[color] || colors.default;
    return (
        <div {...props} className={clsx('w-10 h-6 flex flex-col justify-between cursor-pointer', props?.className)}>
            <span className={`block w-full h-[3px] ${bg} rounded-[2px] transition-all duration-500`}></span>
            <span className={`block w-full h-[3px] ${bg} rounded-[2px] transition-all duration-500`}></span>
            <span className={`block w-full h-[3px] ${bg} rounded-[2px] transition-all duration-500`}></span>
        </div>
    );
};

const Menu = ({ color = 'green' }) => {
    const { isMenuOpen, setIsMenuOpen } = useContextInfo();

    return (
        <>
            <Button
                color={color}
                className={`${isMenuOpen ? 'hidden' : 'block'} z-40`}
                onClick={() => setIsMenuOpen(true)}
            />

            <div
                className={`fixed w-screen h-screen top-0 bg-beige z-40 p-8 grid grid-rows-6 ${
                    isMenuOpen ? 'opacity-100 left-0' : 'opacity-0 left-[100vw]'
                } transition-all duration-300`}
            >
                <div className="flex justify-between items-start">
                    <Logo className="w-16 h-16" color="green" />
                    <AiOutlineClose className="cursor-pointer text-4xl z-50" onClick={() => setIsMenuOpen(false)} />
                </div>

                <nav className="row-start-2 row-end-7 w-5/6 justify-self-center">
                    <ul>
                        <li className="menu-link" onClick={() => setIsMenuOpen(false)}>
                            <Link to="/about">Quien voy siendo</Link>
                        </li>
                        <li className="menu-link" onClick={() => setIsMenuOpen(false)}>
                            <Link to="/projects">Proyectos</Link>
                        </li>
                        <li className="menu-link" onClick={() => setIsMenuOpen(false)}>
                            <Link to="/gallery">Galeria</Link>
                        </li>
                        <li className="menu-link" onClick={() => setIsMenuOpen(false)}>
                            <Link to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;
