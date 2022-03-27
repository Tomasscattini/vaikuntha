import React, { useState } from 'react';
import clsx from 'clsx';
import { AiOutlineClose } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';

const Button = ({ color, ...props }) => (
    <div {...props} className={clsx('w-10 h-6 flex flex-col justify-between cursor-pointer', props?.className)}>
        <span className={`block w-full h-[3px] ${color === 'white' ? 'bg-beige' : 'bg-green'} rounded-[2px]`}></span>
        <span className={`block w-full h-[3px] ${color === 'white' ? 'bg-beige' : 'bg-green'} rounded-[2px]`}></span>
        <span className={`block w-full h-[3px] ${color === 'white' ? 'bg-beige' : 'bg-green'} rounded-[2px]`}></span>
    </div>
);

const Menu = ({ color = 'green' }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                color={color}
                className={`${isOpen ? 'opacity-0' : 'opacity-100'} z-40`}
                onClick={() => setIsOpen(true)}
            />

            <div
                className={`fixed w-screen h-screen top-0 bg-beige z-30 p-8 grid grid-rows-6 ${
                    isOpen ? 'opacity-100 left-0' : 'opacity-0 left-[100vw]'
                } transition-all duration-300`}
            >
                <div className="flex justify-between items-start">
                    <div>Logo</div>
                    <AiOutlineClose className="cursor-pointer text-4xl" onClick={() => setIsOpen(false)} />
                </div>

                <nav className="row-start-2 row-end-7 w-5/6 justify-self-center">
                    <ul>
                        <li className="menu-link" onClick={() => setIsOpen(false)}>
                            <HashLink to="#about">Quien voy siendo</HashLink>
                        </li>
                        <li className="menu-link" onClick={() => setIsOpen(false)}>
                            <HashLink to="#projects">Proyectos</HashLink>
                        </li>
                        <li className="menu-link" onClick={() => setIsOpen(false)}>
                            <HashLink to="#gallery">Galeria</HashLink>
                        </li>
                        <li className="menu-link" onClick={() => setIsOpen(false)}>
                            <HashLink to="#contact">Contacto</HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;
