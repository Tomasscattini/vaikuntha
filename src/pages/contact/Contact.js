import React, { useLayoutEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import drawing from 'assets/images/drawing-1.svg';

const Contact = (props) => {
    const { location, setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    useLayoutEffect(() => {
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    return (
        <div
            {...props}
            className="relative h-screen w-5/6 sm:w-3/4 mx-auto grid grid-cols-1 grid-rows-6 gap-2 text-green"
        >
            <div className="absolute top-24 md:top-8 right-[-3vw] w-3/5 md:w-2/5">
                <img className="" src={drawing} alt="" />
            </div>

            <div className="w-full row-start-3">
                <p className="sm:text-[3vw]">Estemos en contacto</p>
                <p className="text-[4rem] leading-[4rem] md:text-[8rem] md:leading-[8rem] font-bold font-secondary">
                    Hagamos red
                </p>
            </div>

            <div className="md:grid grid-cols-2 gap-4 w-full row-start-4 md:row-start-5">
                <div>
                    <p className="md:text-lg text-center md:text-left font-medium md:w-4/5">
                        No dudes en escribirnos si estás interesadx en alguno de nuestros talleres.
                    </p>
                </div>
                <div className="mt-24 md:mt-0">
                    <ul className="grid grid-cols-2 md:grid-cols-none xl:grid-cols-3 grid-rows-2 gap-2 text-xs md:text-base">
                        <li className="font-medium xl:col-start-1 xl:col-end-3">
                            <a href="mailto:vaikunthadelatierra@gmail.com" rel="noreferrer" target="_blank">
                                vaikunthadelatierra@gmail.com
                            </a>
                        </li>
                        <li className="xl:block font-bold uppercase text-right md:text-left">
                            <a
                                href="https://www.facebook.com/Vaikuntha-Ceramica-Prehisp%C3%A1nica-302992687051842"
                                rel="noreferrer"
                                target="_blank"
                            >
                                facebook
                            </a>
                        </li>
                        <li className="font-medium xl:col-start-1 xl:col-end-3">
                            <a href="tel:+5493549438420" rel="noreferrer" target="_blank">
                                +54 9 (354) 943-8420
                            </a>
                        </li>
                        <li className="font-bold uppercase text-right md:text-left">
                            <a href="https://www.instagram.com/vaikuntha__ct/" rel="noreferrer" target="_blank">
                                instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="absolute flex flex-col-reverse gap-4 md:flex-row items-center justify-between bottom-4 left-0 right-0 text-xs">
                <p>
                    Creado con 🤎 por Itakhi {new Date().getFullYear()} (
                    <a
                        className="underline"
                        href="https://www.gabrielapolancoferreyra.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Gabi Polanco
                    </a>{' '}
                    y{' '}
                    <a className="underline" href="https://www.tomiscattini.com/" rel="noreferrer" target="_blank">
                        Tomi Scattini
                    </a>
                    )
                </p>

                <p>🌎 Viajando por: {location}</p>
            </div>
        </div>
    );
};

export default Contact;
