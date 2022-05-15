import React, { useLayoutEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import drawing from 'assets/images/drawing-1.svg';

const Contact = (props) => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    useLayoutEffect(() => {
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    return (
        <div
            {...props}
            className="relative h-screen w-5/6 sm:w-3/4 mx-auto grid grid-cols-1 grid-rows-5 gap-2 text-green"
        >
            <div className="absolute top-8 right-[-3vw] w-2/5">
                <img className="" src={drawing} alt="" />
            </div>

            <div className="w-full row-start-3">
                <p className="sm:text-[3vw] lowercase">Estemos en contacto</p>
                <p className="text-[10vw] leading-[10vw] lowercase font-bold">Seamos redes</p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full row-start-5">
                <div>
                    <p className="text-lg font-medium w-4/5">
                        No dudes en escribirnos si estás interesadx en alguno de nuestros talleres.
                    </p>
                </div>
                <div>
                    <ul className="grid grid-cols-2 grid-rows-2 gap-2">
                        <li className="font-medium">
                            <a href="mailto:valeria@gmail.com" rel="noreferrer" target="_blank">
                                valeria@gmail.com
                            </a>
                        </li>
                        <li className="font-medium uppercase">
                            <a href="https://facebook.com" rel="noreferrer" target="_blank">
                                facebook
                            </a>
                        </li>
                        <li className="font-medium">
                            <a href="tel:+54911111111" rel="noreferrer" target="_blank">
                                +549xxxxxxxx
                            </a>
                        </li>
                        <li className="font-medium uppercase">
                            <a href="https://instagram.com" rel="noreferrer" target="_blank">
                                instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
