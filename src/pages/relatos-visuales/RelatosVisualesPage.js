import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';

import relatosMain from 'assets/images/relatos-main.jpg';
import relatosOne from 'assets/images/relatos1.jpg';
import relatosTwo from 'assets/images/relatos2.jpg';
import relatosThree from 'assets/images/relatos3.jpg';

const RelatosVisualesPage = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    useLayoutEffect(() => {
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="lg:text-xl lg:leading-10 font-medium">
            <div className="bg-beige md:min-h-screen">
                <div className="w-5/6 xl:w-4/6 mx-auto text-green py-20 md:h-[140vh]">
                    <h2 className="text-4xl font-bold font-primary">
                        relatos <span className="relative top-12 font-secondary text-8xl">audiovisuales</span>
                    </h2>

                    <div className="mt-32 mb-16">
                        <Link className="flex items-center justify-center" to="/relatos/lista">
                            <p className="uppercase border-b-2 border-green font-medium">ver relatos</p>
                        </Link>
                    </div>

                    <div className="md:h-screen w-full flex justify-center">
                        <img className="h-full" src={relatosMain} alt="relatos audiovisuales" />
                    </div>
                </div>
            </div>

            <div className="bg-green text-beige w-full">
                <div className="w-5/6 xl:w-4/6 mx-auto pt-[30vh] pb-[30vh]">
                    <p>
                        Hay una memoria colectiva que nos susurra al oído, como el viento, la estamos oyendo…
                        <br />
                        Relatos visuales es un proyecto colectivo colaborativo de lenguaje plástico/visual, donde
                        buscamos, a partir de la experiencia del trabajo de campo por medio de entrevistas en un
                        compartir fluido con les protagonistas de esta narrativa, visibilizar, revalorizar y poner en
                        dialogo con el contexto actual, historias que hacen a nuestra cultura regional, que están
                        impresas en las memorias corporales y constituyen también nuestras subjetividades.
                    </p>
                </div>
            </div>

            <div className="bg-beige text-green w-full">
                <div className="w-5/6 xl:w-4/6 mx-auto flex items-center justify-center gap-4">
                    <div className="flex-1">
                        <p className="mt-24">
                            Dialogamos a través de diversos soportes plásticos: cerámica, pintura, dibujo, mural e
                            ilustración digital, donde cobrarán cuerpo las historias que intencionamos comunicar desde
                            lo sensible.
                        </p>
                        <p className="mb-24">
                            Relatos visuales es un camino que vamos abriendo entre mujeres artistas de la Provincia de
                            Misiones.
                        </p>
                    </div>

                    <div className="flex-1 translate-x-[20%] translate-y-[-10%]">
                        <img src={relatosOne} alt="relatos audiovisuales 1" />
                    </div>
                </div>
            </div>

            <div className="h-[150vh] w-full">
                <img src={relatosTwo} alt="relatos audiovisuales 2" className="w-full h-full object-cover" />
            </div>

            <div className="bg-beige text-green w-full py-48">
                <div className="w-5/6 xl:w-4/6 mx-auto flex items-center justify-center">
                    <p>
                        Ser MESTIZAS en tiempos contemporáneos, cambios de escenario, de tiempos y de costumbres
                        <br />
                        Ser mujer
                        <br />
                        ser mujer a secas
                        <br />
                        ser mujer de monte endurecer el cuero, el cuerpo, esconder las emociones y esa creencia que lo
                        seguro es masculinizar el ser, lo cuestionamos, lo dialogamos escuchamos sus historias
                        <br />
                        Es la conexión con la tierra, el todo y los saberes, la magia, la maga, la bruja del monte.
                    </p>
                </div>
            </div>

            <div className="w-full h-screen">
                <img src={relatosThree} alt="relatos audiovisuales 3" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default RelatosVisualesPage;
