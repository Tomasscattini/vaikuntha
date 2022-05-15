import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import InstagramFeed from 'react-ig-feed';
import './ig-feed.css';

import projects from 'data/projects';

import arrowBack from 'assets/images/arrow-back.svg';
import instagramLogo from 'assets/images/instagram.png';

const EntreMujeresPage = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();
    const currentProject = projects['entre-mujeres-y-el-barro'];

    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scroll(0, 0);
        setColorScheme('green');
        setIsAppLogoVisible(false);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="min-h-screen text-green">
                <div className="w-5/6 xl:w-4/6 mx-auto pt-24">
                    <div onClick={() => navigate('/proyectos')} className="cursor-pointer mb-12">
                        <img src={arrowBack} alt="" />
                    </div>

                    <div className="flex items-center">
                        <span
                            className="grid place-content-center shrink-0 bg-green text-darkGreen 
                                                font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                                my-2 mr-4"
                        >
                            {currentProject?.id}
                        </span>

                        <h2 className="font-primary text-6xl font-medium">{currentProject?.title}</h2>
                    </div>

                    <div className="relative mt-20">
                        <div className="top-0  ml-4 text-xl w-5/6">
                            {currentProject?.description?.map((paragraph, index) => (
                                <p key={index} className="relative z-20 my-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="absolute w-2/5 right-0 top-32 z-10">
                            <img className="w-full" src={currentProject?.image1} alt={currentProject?.title} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-green h-full">
                <div className="w-5/6 xl:w-4/6 mx-auto pt-52 text-xl text-beige">
                    <p>{currentProject?.abstract}</p>
                </div>

                <div className="relative flex h-[30vw] w-[120vw] left-[-10vw] mt-32">
                    <div className="w-[40vw] h-full overflow-hidden">
                        <img className="object-cover h-full" src={currentProject?.image2} alt="" />
                    </div>
                    <div className="relative top-[-4rem] left-[-1rem] w-[40vw] h-full overflow-hidden">
                        <img className="object-cover w-full" src={currentProject?.mainImage} alt="" />
                    </div>
                    <div className="relative top-[1rem] left-[-4rem] w-[40vw] h-full overflow-hidden">
                        <img className="object-cover h-full" src={currentProject?.image3} alt="" />
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-32 mb-16">
                    <img className="mr-4 h-8" src={instagramLogo} alt="" />
                    <span className="text-yellow font-medium text-xl">seguinos en instagram</span>
                </div>

                <div className="w-5/6 xl:w-4/6 mx-auto min-h-screen">
                    <InstagramFeed token={process.env.REACT_APP_INSTAGRAM_TOKEN} counter="9" />
                </div>
            </div>
        </>
    );
};

export default EntreMujeresPage;
