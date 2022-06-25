import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useContextInfo } from 'hooks/ContextProvider';

import arrowOpen from 'assets/images/arrow-open.svg';
import projects from 'data/projects';

const Projects = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    const imageOneRef = useRef();
    const imageTwoRef = useRef();
    const imageThreeRef = useRef();

    useLayoutEffect(() => {
        window.scroll(0, 0);
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (!(imageOneRef?.current && imageTwoRef?.current && imageThreeRef?.current)) return;
            [imageOneRef.current, imageTwoRef.current, imageThreeRef.current].forEach((ref) => {
                if (window.screen.height / 2 >= ref.getBoundingClientRect()?.top) {
                    ref.classList.add('rotate-0');
                }
            });
        });

        return () => document.removeEventListener('scroll', () => console.log('clean'));
    }, [imageOneRef, imageTwoRef, imageThreeRef]);

    return (
        <div className="min-h-screen">
            <div className="w-5/6 xl:w-4/6 mx-auto py-20 text-green">
                <div className="pb-32">
                    <h2 className="text-yellow font-primary text-5xl font-bold mt-24">proyectos</h2>
                    <h3 className="text-green text-4xl font-bold font-primary ml-40">
                        despliegues <br />
                        <span className="relative top-2 ml-48 font-secondary text-8xl leading-3">creativos</span>
                    </h3>
                </div>

                <div className="pt-8 pb-20">
                    <div className="grid grid-cols-11 mb-20">
                        <div className="col-start-1 col-end-7">
                            <img
                                ref={imageOneRef}
                                className="rotate-[-6deg] hover:rotate-0 transition-all duration-300"
                                src={projects['entre-mujeres-y-el-barro']?.mainImage}
                                alt="Entre mujeres y el barro"
                            />
                        </div>
                        <div className="col-start-8 col-end-12">
                            <div className="flex">
                                <span
                                    className="grid place-content-center shrink-0 bg-yellow text-green 
                                                font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                                my-2 mr-2"
                                >
                                    {projects['entre-mujeres-y-el-barro']?.id}
                                </span>
                                <h3 className="text-3xl font-primary font-medium lowercase">
                                    {projects['entre-mujeres-y-el-barro']?.title}
                                </h3>
                            </div>
                            <p className="my-4">{projects['entre-mujeres-y-el-barro']?.abstract}</p>

                            <Link to={projects['entre-mujeres-y-el-barro']?.uri} className="flex items-center">
                                <span className="uppercase pb-1 border-b-2">descubrir</span>
                                <img src={arrowOpen} alt="" className="ml-4" />
                            </Link>
                        </div>
                    </div>

                    <hr className="border-0 h-[2px] bg-green my-20" />

                    <div className="flex items-center justify-center mb-24">
                        <span
                            className="grid place-content-center shrink-0 bg-yellow text-green 
                                    font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                    my-2 mr-2"
                        >
                            {projects['taller-adentro']?.id}
                        </span>
                        <h3 className="text-3xl font-primary font-medium">{projects['taller-adentro']?.title}</h3>
                    </div>
                    {projects['taller-adentro']?.subdivisions?.map((subdivision, index) => (
                        <div key={subdivision?.email} className="grid grid-cols-11 mb-48">
                            <div
                                className={
                                    index % 2 === 0 ? 'row-start-1 col-start-6 col-end-12' : 'col-start-1 col-end-7'
                                }
                            >
                                <img
                                    ref={index === 0 ? imageTwoRef : imageThreeRef}
                                    className={`${
                                        index % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[7deg]'
                                    } hover:rotate-0 transition-all duration-300`}
                                    src={subdivision?.mainImage}
                                    alt={subdivision?.title}
                                />
                            </div>
                            <div
                                className={
                                    index % 2 === 0 ? 'row-start-1 col-start-1 col-end-5' : 'col-start-8 col-end-12'
                                }
                            >
                                <div className="flex items-center">
                                    <h3 className="text-5xl font-bold">
                                        {subdivision?.id}-{subdivision?.title}
                                    </h3>
                                </div>
                                <p className="my-4">{subdivision?.abstract}</p>

                                <HashLink to={subdivision?.uri} className="flex items-center">
                                    <span className="uppercase pb-1 border-b-2">descubrir</span>
                                    <img src={arrowOpen} alt="" className="ml-4" />
                                </HashLink>
                            </div>
                        </div>
                    ))}

                    <hr className="border-0 h-[2px] bg-green my-20" />

                    <div className="grid grid-cols-11 mb-20">
                        <div className="col-start-1 col-end-7">
                            <img
                                ref={imageOneRef}
                                className="rotate-[-6deg] hover:rotate-0 transition-all duration-300"
                                src={projects['relatos-visuales']?.mainImage}
                                alt="Entre mujeres y el barro"
                            />
                        </div>
                        <div className="col-start-8 col-end-12">
                            <div className="flex">
                                <span
                                    className="grid place-content-center shrink-0 bg-yellow text-green 
                                                font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                                my-2 mr-2"
                                >
                                    {projects['relatos-visuales']?.id}
                                </span>
                                <h3 className="text-3xl font-primary font-medium lowercase">
                                    {projects['relatos-visuales']?.title}
                                </h3>
                            </div>
                            <p className="my-4">{projects['relatos-visuales']?.abstract}</p>

                            <Link to={projects['relatos-visuales']?.uri} className="flex items-center">
                                <span className="uppercase pb-1 border-b-2">descubrir</span>
                                <img src={arrowOpen} alt="" className="ml-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
