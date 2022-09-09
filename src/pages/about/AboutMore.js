import React, { useLayoutEffect } from 'react';
import clsx from 'clsx';
import { HashLink } from 'react-router-hash-link';

import arrowIcon from 'assets/images/arrow-down.svg';
import about4 from 'assets/images/about-4.jpg';
import about5 from 'assets/images/about-5.jpg';
import about6 from 'assets/images/about-6.jpg';
import drawing1 from 'assets/images/drawing-1-beige.svg';
import drawing2 from 'assets/images/drawing-2.svg';

const AboutMore = ({ className, gsap }) => {
    useLayoutEffect(() => {
        const elementsArray = [
            '.about-image1',
            '.about-p2',
            '.about-p3',
            '.about-image2',
            '.about-p4',
            '.about-p5',
            '.about-image3',
            '.about-p6',
            '.about-p7',
            '.about-p8',
            '.about-p9'
        ];

        elementsArray.forEach((elem, index) => {
            gsap.fromTo(
                elem,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top bottom-=50',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        });
    }, [gsap]);

    return (
        <div className={clsx('', className)}>
            <div className="snap-start h-[50vh] w-auto md:h-screen md:w-[80vw] mx-auto translate-y-[-5vh] overflow-hidden">
                <img className="about-image1 object-cover min-h-full min-w-full" src={about4} alt="" />
            </div>

            <div
                id="more"
                className="snap-start relative md:min-h-1500 lg:min-h-1200 w-full my-4 md:my-auto text-green text-sm md:text-[1.4rem] md:leading-8 font-medium"
            >
                <div className="about-image2 hidden absolute md:flex items-center justify-center z-0 bottom-16 left-16 max-w-1/2 h-2/3 overflow-hidden">
                    <img className="w-full" src={about5} alt="" />
                </div>
                <div className="relative z-10 w-4/6 mx-auto grow-0 md:pt-2 md:mt-16">
                    <p className="about-p2">
                        La curiosidad me llevó a la carrera de Artes Plásticas en La Plata UNLP, se abrían otros mundos
                        ante mis ojos. La experimentación, lo diverso y los viajes fueron desvistiéndome de ideas y
                        mandatos, en ese camino exploré a través de la Fotografía en la escuela de Andy Goldstein
                        (Capital Federal), revelado ByN en talleres de extensión en la UBA. Dibujo y Pintura en El Serpa
                        (Capital Federal) Educación Popular en Pañuelos en rebeldía. Y otros lenguajes corporales y
                        holísticos que nutren y me acompañan en el camino.
                    </p>
                </div>
                <div className="relative md:mt-16 mx-auto md:mr-16 z-10 w-4/6 md:w-[50%] md:float-right">
                    <p className="about-p3 my-8">
                        Paralelamente lo Social comenzaba a inquietarme, observar el entorno, buscar comprender las
                        complejas tramas que nos tejen. Latir lo comunitario, habitar los territorios. Fue así que
                        comencé Psicología Social en la Escuela de Pichón Riviere, finalizando en el 2017. Para luego
                        crear, desde la libertad de soñar y confiar, mi propia síntesis, la medicina que sigo
                        aprendiendo y compartiendo.
                    </p>
                    <p className="about-p4 my-8">
                        Desde propuestas grupales diversas, con el foco en el lenguaje cerámico y otros recursos
                        expresivos, abordando desde una perspectiva psicosocial, invito a ahondar en nuestros mundos
                        internos y crear desde allí.
                    </p>
                    <p className="about-p5 my-8">
                        La cerámica me interpeló por el 2014, luego de haber pasado por un taller dentro del marco
                        universitario. Mi encuentro genuino con la arcilla, fue por San Pedro, una localidad de
                        Misiones, ella se presentó entre los pastizales, entramos en dialogo, hice mis primeras
                        experimentaciones, el tiempo se tornaba ese encuentro silencioso y profundo.
                    </p>
                </div>
            </div>

            <div className="snap-start min-h-screen w-full bg-green">
                <div className="w-5/6 md:w-4/6 mx-auto flex flex-col justify-center items-center">
                    <div className="about-image3 h-[50vh] md:h-[70vh] my-4 md:mt-52 md:mb-24 w-full flex items-center overflow-hidden">
                        <img className="w-full object-cover mt-32" src={about6} alt="" />
                    </div>
                    <div className="text-yellow text-sm md:text-[1.4rem] md:leading-8">
                        <p className="about-p6 my-8">
                            Me formé y continuo haciendolo con varias y varios maestrxs del oficio, alfarerxs de legado
                            ancestral de diversas culturas, encuentros donde el saber y el compartir circulan entre
                            colegas y la experimentación en los territorios que voy habitando.
                        </p>
                        <p className="about-p7 my-8">
                            Desde el 2017 facilito talleres de cerámica de raiz preamericana con diversas temáticas,
                            haciendo hincapié en el uso consciente de los recursos que se encuentran en nuestro entorno
                            cercano, como así también en el porque y el para que de cada objeto/pieza que se realiza.
                            Desde el 2019 gesté un proyecto en el cual coordiné estos 4 años: “ENTRE MUJERES Y EL BARRO”
                            en la Localidad de profundidad, Mnes. donde se focalizó en una primera instancia en el
                            aprendizaje de las técnicas de la cerámica tradicional para su posterior comercialización,
                            como así también la búsqueda de ampliar el imaginario creativo y el sentido cooperativo,
                            desde un enfoque psicosocial. . A partir del 2020 comencé a ser parte del área de Artes del
                            Fuego en El Parque del Conocimiento en Posadas Mnes.
                        </p>

                        <p className="about-p8 my-8">
                            Desde mediados del 2020 empecé con la inquietud de recolectar historias de mujeres, lo que
                            se convertiría tiempo después en un proyecto colectivo al que nombramos RELATOS VISUALES, el
                            cual sigue vivo, creciendo y ampliando sus horizontes.
                            <br />
                            Paralelamente desde el 2019 me encuentro en la formación de astrología en la escuela
                            Astrohología.
                            <br />
                            Participo de muestras y exposiciones, generalmente de manera colectiva e independiente.
                        </p>

                        <p className="about-p9 my-8">
                            Así voy caminando como hacedora sensible, en una formación constante. Traduciendo lo que me
                            atraviesa en poesía material. Gestando ideas, generando espacios, creando otros posibles.
                        </p>

                        <div className="flex items-center w-full overflow-hidden mt-8 mb-40 md:my-32">
                            <div className="w-1/2 mr-8 md:mr-32">
                                <img src={drawing1} alt="" />
                            </div>
                            <div className="w-1/2">
                                <img src={drawing2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <HashLink
                    to="#top"
                    className="absolute z-20 h-16 md:h-24 bottom-16 right-4 md:right-32 cursor-pointer rotate-180"
                >
                    <img className="h-full" src={arrowIcon} alt="" />
                </HashLink>
            </div>
        </div>
    );
};

export default AboutMore;
