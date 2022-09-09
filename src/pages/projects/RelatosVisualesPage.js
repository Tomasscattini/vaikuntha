import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import InstagramFeed from 'react-ig-feed';
import './ig-feed.css';

import arrowBack from 'assets/images/arrow-back.svg';
import instagramLogo from 'assets/images/instagram-yellow.svg';
import relatosMain from 'assets/images/relatos-main.jpg';
import relatosOne from 'assets/images/relatos1.jpg';
import relatosTwo from 'assets/images/relatos2.jpg';

const RelatosVisualesPage = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scroll(0, 0);
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="text-sm md:text-lg md:leading-8 font-medium pb-24 md:48">
            <div className="bg-beige md:min-h-screen">
                <div className="w-5/6 xl:w-4/6 mx-auto text-green py-24 md:h-[140vh]">
                    <div onClick={() => navigate('/proyectos')} className="relative w-6 md:w-8 cursor-pointer mb-12">
                        <img src={arrowBack} alt="" className="w-full" />
                    </div>

                    <div className="relative flex items-center justify-center">
                        <h2 className="font-primary text-center text-3xl md:text-5xl font-medium">Relatos Visuales</h2>
                    </div>

                    <div className="md:h-screen w-full flex justify-center mt-16 md:mt-36">
                        <img className="h-full" src={relatosMain} alt="relatos visuales" />
                    </div>
                </div>
            </div>

            <div className="bg-green text-beige w-full">
                <div className="w-5/6 xl:w-4/6 mx-auto py-16 md:pt-[30vh] md:pb-[30vh]">
                    <p className="font-medium md:text-[1.6rem] md:leading-8">
                        Somos un colectivo de Mujeres artistas y de oficios que buscamos a partir de la experiencia del
                        trabajo de campo por medio de entrevistas, visibilizar, revalorizar y poner en diálogo con el
                        contexto actual, historias que nos interpelan, que están impresas en las memorias corporales y
                        constituyen también nuestras subjetividades. Para luego traducir la experiencia en diferentes
                        soportes plásticos, visuales, sonoros y sensoriales.
                    </p>
                </div>
            </div>

            <div className="bg-beige text-green w-full text-sm md:text-[1.4rem] md:leading-8 font-medium">
                <div className="w-5/6 xl:w-4/6 mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4">
                    <div className="flex-1">
                        <p className="my-16 md:my-auto">
                            Relatos visuales es un camino que se va abriendo en el andar.
                            <br />
                            <br />
                            Es un acto psicomagico, donde eso que no tuvo lugar sale y se manifiesta con fuerza animal.
                        </p>
                    </div>

                    <div className="md:flex-1 w-full md:w-auto h-[40vh] md:h-auto overflow-hidden md:overflow-visible md:translate-x-[20%] md:translate-y-[-10%] mt-16 md:mt-0">
                        <img className="w-full" src={relatosOne} alt="relatos audiovisuales 1" />
                    </div>
                </div>
            </div>

            <div className="md:h-[150vh] w-full">
                <img src={relatosTwo} alt="relatos audiovisuales 2" className="w-full h-full object-cover" />
            </div>

            <div className="bg-beige text-green w-full py-16 md:pt-48">
                <div className="w-5/6 xl:w-4/6 mx-auto flex items-center justify-center text-sm md:text-[1.4rem] md:leading-8 font-medium">
                    <p>
                        Es TIEMPO donde los opuestos no se superan o eliminan, si no que con-viven, en la contradicción
                        del cosmos y el caos, que siempre está ahí, latiendo. <br />
                        <br />
                        Deseamos que conecten con estos relatos/historias al igual que nosotras!
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="inline-block w-full text-center font-bold">
                            ¡que la fuerza sensible nos guie!
                        </span>
                    </p>
                </div>
            </div>

            <a
                href="https://www.instagram.com/relatos__visuales/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-full mt-8 md:mt-16 mb-16"
            >
                <img className="mr-4 h-8" src={instagramLogo} alt="" />
                <span className="text-yellow font-medium text-xl">Seguinos en instagram</span>
            </a>

            <div className="w-5/6 xl:w-4/6 mx-auto">
                <InstagramFeed token={process.env.REACT_APP_RELATOS_VISUALES_INSTAGRAM_TOKEN} counter="9" />
            </div>
        </div>
    );
};

export default RelatosVisualesPage;
