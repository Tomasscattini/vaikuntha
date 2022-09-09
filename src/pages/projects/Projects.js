import React, { useEffect, useLayoutEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useContextInfo } from 'hooks/ContextProvider';
import clsx from 'clsx';

import arrowOpen from 'assets/images/arrow-open-yellow.svg';
import projects from 'data/projects';

const Projects = ({ gsap }) => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    useLayoutEffect(() => {
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        gsap.fromTo(
            '.projects-image1',
            {
                rotate: '-6deg'
            },
            {
                rotate: '0',
                scrollTrigger: {
                    trigger: '.projects-image1',
                    start: 'top center',
                    end: 'top center+=100',
                    toggleActions: 'restart none none reverse',
                    scrub: true
                }
            }
        );
        gsap.fromTo(
            '.projects-image2',
            {
                rotate: '-6deg'
            },
            {
                rotate: '0',
                scrollTrigger: {
                    trigger: '.projects-image2',
                    start: 'top center',
                    end: 'top center+=100',
                    toggleActions: 'restart none none reverse',
                    scrub: true
                }
            }
        );
        gsap.fromTo(
            '.projects-image3',
            {
                rotate: '-3deg'
            },
            {
                rotate: '0',
                scrollTrigger: {
                    trigger: '.projects-image3',
                    start: 'top center',
                    end: 'top center+=100',
                    toggleActions: 'restart none none reverse',
                    scrub: true
                }
            }
        );
        gsap.fromTo(
            '.projects-image4',
            {
                rotate: '7deg'
            },
            {
                rotate: '0',
                scrollTrigger: {
                    trigger: '.projects-image4',
                    start: 'top center',
                    end: 'top center+=100',
                    toggleActions: 'restart none none reverse',
                    scrub: true
                }
            }
        );
    }, [gsap]);

    return (
        <div className="min-h-screen">
            <div className="w-5/6 xl:w-4/6 mx-auto pt-20 text-green">
                <div className="pb-8 md:pb-32">
                    <h2 className="text-green font-primary text-4xl md:text-6xl font-bold mt-24">Proyectos</h2>
                    <h3 className="text-green text-5xl md:text-8xl font-bold ml-20 md:ml-40">despliegues creativos</h3>
                </div>

                <div className="pt-8">
                    <div className="md:grid md:grid-cols-11 mb-20">
                        <HashLink
                            to={`${projects['relatos-visuales']?.uri}#top`}
                            className="hidden md:block md:col-start-1 md:col-end-7 mb-16 md:mb-auto"
                        >
                            <img
                                className="projects-image1 hover:rotate-0 transition-all duration-300"
                                src={projects['relatos-visuales']?.mainImage}
                                alt={projects['relatos-visuales']?.title}
                            />
                        </HashLink>
                        <div className="md:col-start-8 md:col-end-12">
                            <HashLink
                                to={`${projects['relatos-visuales']?.uri}#top`}
                                className="flex items-center md:items-start"
                            >
                                <span
                                    className="grid place-content-center shrink-0 bg-green text-beige 
                                                font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                                md:my-1 mr-2"
                                >
                                    {projects['relatos-visuales']?.id}
                                </span>
                                <h3 className="text-xl leading-5 md:text-3xl font-primary font-semibold">
                                    {projects['relatos-visuales']?.title}
                                </h3>
                            </HashLink>

                            <HashLink to={`${projects['relatos-visuales']?.uri}#top`} className="block md:hidden my-16">
                                <img
                                    src={projects['relatos-visuales']?.mainImage}
                                    alt={projects['relatos-visuales']?.title}
                                />
                            </HashLink>

                            <p className="my-4">{projects['relatos-visuales']?.abstract}</p>

                            <HashLink
                                to={`${projects['relatos-visuales']?.uri}#top`}
                                className="flex items-center justify-end"
                            >
                                <span className="uppercase text-yellow text-sm font-semibold pb-1 border-b-2">
                                    descubrir
                                </span>
                                <img src={arrowOpen} alt="" className="ml-4 h-4 w-4" />
                            </HashLink>
                        </div>
                    </div>

                    <hr className="border-0 h-[1px] md:h-[2px] bg-green my-20" />

                    <div className="md:grid md:grid-cols-11 mb-20">
                        <HashLink
                            to={`${projects['entre-mujeres-y-el-barro']?.uri}#top`}
                            className="hidden md:block col-start-6 col-end-12 mb-16 md:mb-auto"
                        >
                            <img
                                className="projects-image2 hover:rotate-0 transition-all duration-300"
                                src={projects['entre-mujeres-y-el-barro']?.mainImage}
                                alt={projects['entre-mujeres-y-el-barro']?.title}
                            />
                        </HashLink>
                        <div className="md:col-start-1 md:col-end-5 md:row-start-1">
                            <HashLink
                                to={`${projects['entre-mujeres-y-el-barro']?.uri}#top`}
                                className="flex items-center md:items-start"
                            >
                                <span
                                    className="grid place-content-center shrink-0 bg-green text-beige 
                                                font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                                md:my-1 mr-2"
                                >
                                    {projects['entre-mujeres-y-el-barro']?.id}
                                </span>
                                <h3 className="text-xl leading-5 md:text-3xl font-primary font-semibold">
                                    {projects['entre-mujeres-y-el-barro']?.title}
                                </h3>
                            </HashLink>

                            <HashLink
                                to={`${projects['entre-mujeres-y-el-barro']?.uri}#top`}
                                className="block md:hidden my-16"
                            >
                                <img
                                    src={projects['entre-mujeres-y-el-barro']?.mainImage}
                                    alt={projects['entre-mujeres-y-el-barro']?.title}
                                />
                            </HashLink>

                            <p className="my-4">{projects['entre-mujeres-y-el-barro']?.abstract}</p>

                            <HashLink
                                to={`${projects['entre-mujeres-y-el-barro']?.uri}#top`}
                                className="flex items-center justify-end"
                            >
                                <span className="uppercase text-yellow text-sm font-semibold pb-1 border-b-2">
                                    descubrir
                                </span>
                                <img src={arrowOpen} alt="" className="ml-4 h-4 w-4" />
                            </HashLink>
                        </div>
                    </div>

                    <hr className="border-0 h-[1px] md:h-[2px] bg-green my-20" />

                    <HashLink
                        to={`${projects['taller-adentro']?.subdivisions?.[0]?.uri}#top`}
                        className="flex items-center justify-start md:justify-center mb-16 md:mb-24"
                    >
                        <span
                            className="grid place-content-center shrink-0 bg-green text-beige 
                                    font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                    my-2 mr-2"
                        >
                            {projects['taller-adentro']?.id}
                        </span>
                        <h3 className="text-xl leading-5 md:text-3xl font-primary font-semibold">
                            {projects['taller-adentro']?.title}
                        </h3>
                    </HashLink>
                    {projects['taller-adentro']?.subdivisions?.map((subdivision, index) => (
                        <div key={subdivision?.uri} className="md:grid md:grid-cols-11 mb-24 md:mb-48">
                            <HashLink
                                to={subdivision?.uri}
                                className={clsx(
                                    'hidden md:block mb-16 md:mb-auto',
                                    index % 2 !== 0
                                        ? 'md:row-start-1 md:col-start-6 md:col-end-12'
                                        : 'md:col-start-1 md:col-end-7'
                                )}
                            >
                                <img
                                    className={`${
                                        index % 2 !== 0 ? 'projects-image3' : 'projects-image4'
                                    } hover:rotate-0 transition-all duration-300`}
                                    src={subdivision?.mainImage}
                                    alt={subdivision?.title}
                                />
                            </HashLink>
                            <div
                                className={
                                    index % 2 !== 0
                                        ? 'md:row-start-1 md:col-start-1 md:col-end-5'
                                        : 'md:col-start-8 md:col-end-12'
                                }
                            >
                                <HashLink to={subdivision?.uri} className="flex items-center">
                                    <h3 className="text-2xl md:text-3xl font-bold">{subdivision?.title}</h3>
                                </HashLink>

                                <HashLink to={subdivision?.uri} className="block md:hidden my-16">
                                    <img src={subdivision?.mainImage} alt={subdivision?.title} />
                                </HashLink>

                                <p className="my-4">{subdivision?.abstract}</p>

                                <HashLink to={subdivision?.uri} className="flex items-center justify-end">
                                    <span className="uppercase text-yellow text-sm font-semibold pb-1 border-b-2">
                                        descubrir
                                    </span>
                                    <img src={arrowOpen} alt="" className="ml-4 h-4 w-4" />
                                </HashLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
