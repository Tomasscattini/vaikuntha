import React from 'react';
import { HashLink } from 'react-router-hash-link';

import arrowIcon from 'assets/images/arrow.png';
import blobIcon from 'assets/images/blob.png';
import clayWorkIcon from 'assets/images/clay-work.png';
import handIcon from 'assets/images/hand.png';
import universeIcon from 'assets/images/universe.png';

const AboutMore = () => {
    return (
        <>
            <div id="more" className="relative h-screen w-full flex justify-center items-center">
                <div className="absolute bottom-16 left-8">
                    <img src={handIcon} alt="" />
                </div>
                <div className="w-2/5 mx-auto grow-0 text-green  text-[1.4rem] leading-8">
                    <p className="my-8">
                        Por los caminos descalza desde muy chiquita, mis pies se fueron tiñendo de rojo como la tierra
                        que me vió nacer.
                    </p>
                    <p className="my-8">
                        la curiosidad me llevó a la carrera de Artes Plásticas en La Plata UNLP, se abrían otros mundos
                        ante mis ojos. La experimentación, lo diverso y los viajes fueron desvistiéndome de ideas y
                        mandatos.
                    </p>
                    <p className="my-8">
                        En ese camino exploré a través de la Fotografía en la escuela de Andy Goldstein (Capital
                        Federal), revelado ByN en talleres de extensión en la UBA. Dibujo y Pintura en El Serpa (Capital
                        Federal). Y otros lenguajes corporales y holísticos que nutren lo que voy siendo.
                    </p>
                </div>
            </div>

            <div className="h-screen w-full bg-green">
                <div className="h-full flex justify-center items-center">
                    <div className="h-full flex items-center basis-1/2 pl-8">
                        <img className="w-3/4" src={clayWorkIcon} alt="" />
                    </div>
                    <div className="basis-1/2 text-beige  text-[1.4rem] leading-8 pr-48">
                        <p className="my-8">
                            Paralelamente lo Social comenzaba a inquietarme, observar el entorno, buscar comprender las
                            complejas tramas que nos tejen. Latir lo comunitario, habitar los territorios. Fue así que
                            comencé Psicología Social en la Escuela de Pichón Riviere, finalizando en el 2017. Para
                            luego crear, desde la libertad de soñar y confiar, mi propia síntesis, la medicina que sigo
                            aprendiendo y compartiendo.
                        </p>
                        <p className="my-8">
                            Desde propuestas grupales diversas, con el foco en el lenguaje cerámico y otros recursos
                            expresivos, abordando desde una perspectiva psicosocial, invito a ahondar en nuestros mundos
                            internos y crear desde allí.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative h-screen w-full">
                <div className="w-2/5 mx-auto pt-32 grow-0 text-green  text-[1.4rem] leading-8">
                    <p>
                        La cerámica me interpeló por el 2014, luego de haber pasado por un taller dentro del marco
                        universitario. Mi encuentro genuino con la arcilla, fue por San Pedro, una localidad de
                        Misiones, ella se presentó entre los pastizales, entramos en dialogo, hice mis primeras
                        experimentaciones, el tiempo se tornaba ese encuentro silencioso y profundo. Luego vendría su
                        transformación, un gran momento ritual desde que se recolecta la leña, pasando por el armado del
                        horno o la disposición para la quema a cielo abierto hasta que las piezas se encontraban allí,
                        transformándose en cuerpos cerámicos y nosotres aprendices de esa alquimia, absorbiendo por los
                        poros su memoria.
                    </p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <img className="w-4/5" src={universeIcon} alt="" />
                </div>
            </div>

            <div className="h-screen w-full bg-green">
                <div className="h-full w-4/5 mx-auto flex justify-center items-center">
                    <div className="basis-2/3 text-beige  text-[1.4rem] leading-8 mr-48">
                        <p className="my-8">
                            Desde el 2017 facilito talleres de cerámica preamericana con diversas temáticas, haciendo
                            hincapié en el uso consiente de los recursos que se encuentran en nuestro entorno cercano,
                            como así también en el porque y el para que de cada objeto/pieza que se realiza. A partir
                            del 2020 comencé a ser parte del área de Artes del Fuego en El Parque del Conocimiento en
                            Posadas Mnes.
                        </p>
                        <p className="my-8">
                            Así voy caminando este oficio y como artista, aprehendiendo de maestres ceramistas, colegas
                            compañeres del camino y mi insaciable inquietud ante lo que me motiva. Traduciendo lo que me
                            atraviesa en lenguaje simbólico, en poesía palpable y compartida. Gestando ideas, generando
                            espacios, creando otros posible
                        </p>
                    </div>
                    <div className="basis-1/3 h-full pt-16">
                        <img src={blobIcon} alt="" />
                    </div>
                </div>
                <HashLink to="#top" className="absolute z-20 bottom-16 right-32 cursor-pointer rotate-180">
                    <img src={arrowIcon} alt="" />
                </HashLink>
            </div>
        </>
    );
};

export default AboutMore;
