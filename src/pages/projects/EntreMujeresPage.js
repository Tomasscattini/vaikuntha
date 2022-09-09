import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import InstagramFeed from 'react-ig-feed';
import './ig-feed.css';

import projects from 'data/projects';

import arrowBack from 'assets/images/arrow-back.svg';
import instagramLogo from 'assets/images/instagram-yellow.svg';

const EntreMujeresPage = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();
    const currentProject = projects['entre-mujeres-y-el-barro'];

    const navigate = useNavigate();

    useLayoutEffect(() => {
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="min-h-screen text-green">
                <div className="w-5/6 mx-auto pt-36">
                    <div onClick={() => navigate('/proyectos')} className="relative w-6 md:w-8 cursor-pointer mb-12">
                        <img src={arrowBack} alt="" className="w-full" />
                    </div>

                    <div className="relative flex items-center justify-center">
                        <h2 className="font-primary text-center text-3xl md:text-5xl font-medium">
                            {currentProject?.title}
                        </h2>
                    </div>

                    <div className="relative my-20">
                        <div className="top-0  ml-4 mb-16 md:mb-0 text-sm md:text-[1.4rem] md:leading-8 font-medium">
                            <div className="md:flex items-center gap-20">
                                <div className="lg:inline-block">
                                    <p className="my-4">{currentProject?.description?.[0]}</p>
                                    <p className="my-4">{currentProject?.description?.[1]}</p>
                                </div>
                                <div className="hidden lg:block shrink-0 basis-[40%]">
                                    <img className="w-full" src={currentProject?.image1} alt={currentProject?.title} />
                                </div>
                            </div>
                        </div>

                        <div className="lg:hidden w-4/5 mx-auto md:mt-16 mb-16 lg:mb-0 lg:w-2/5 lg:right-0 lg:top-32 z-10">
                            <img className="w-full" src={currentProject?.image1} alt={currentProject?.title} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-green h-full pb-24">
                <div className="w-5/6 xl:w-4/6 mx-auto pt-16 md:pt-32 text-sm md:text-[1.4rem] md:leading-8 font-medium text-beige">
                    <p>{currentProject?.description?.[2]}</p>
                    <br />
                    <p>{currentProject?.description?.[3]}</p>
                    <br />
                    <p>{currentProject?.description?.[4]}</p>
                </div>

                <div className="relative flex h-[40vh] md:h-[30vw] w-full md:w-[120vw] md:left-[-10vw] mt-16 md:mt-32">
                    <div className="hidden md:inline-block w-[40vw] h-full overflow-hidden">
                        <img className="object-cover h-full" src={currentProject?.image2} alt="" />
                    </div>
                    <div className="relative md:top-[-4rem] md:left-[-1rem] w-full md:w-[40vw] h-full overflow-hidden">
                        <img className="object-cover w-full" src={currentProject?.mainImage} alt="" />
                    </div>
                    <div className="hidden md:inline-block relative top-[1rem] left-[-4rem] w-[40vw] h-full overflow-hidden">
                        <img className="object-cover h-full" src={currentProject?.image3} alt="" />
                    </div>
                </div>

                <a
                    href={currentProject?.instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-full mt-16 md:mt-32 mb-16"
                >
                    <img className="mr-4 h-8" src={instagramLogo} alt="" />
                    <span className="text-yellow font-medium text-xl">Seguinos en instagram</span>
                </a>

                <div className="w-5/6 xl:w-4/6 mx-auto">
                    <InstagramFeed token={currentProject?.instagramToken} counter="9" />
                </div>
            </div>
        </>
    );
};

export default EntreMujeresPage;
