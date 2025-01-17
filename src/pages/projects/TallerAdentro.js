import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import InstagramFeed from 'react-ig-feed';
import './ig-feed.css';

import projects from 'data/projects';

import arrowBack from 'assets/images/arrow-back-yellow.svg';
import instagramLogo from 'assets/images/instagram-yellow.svg';

const EntreMujeresPage = ({ gsap }) => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();
    const currentProject = projects['taller-adentro'];

    const navigate = useNavigate();

    useLayoutEffect(() => {
        setColorScheme('yellow');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    useLayoutEffect(() => {
        const elementsArray = [
            '.taller-title',
            '.taller-p1',
            '.taller-subtitle1',
            '.taller-p2',
            '.taller-image1',
            '.taller-image2',
            '.taller-image3',
            '.taller-image4',
            '.taller-image5',
            '.taller-image6',
            '.taller-subtitle2',
            '.taller-p3',
            '.taller-p4',
            '.taller-p5'
        ];

        const elemWithMoreDelay = ['.taller-title', '.taller-subtitle1', '.taller-p1', '.taller-p2'];

        elementsArray.forEach((elem, index) => {
            gsap.fromTo(
                elem,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    delay: elemWithMoreDelay?.includes(elem) ? 0.2 * (index + 1) : 0.3,
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
        <div className="min-h-screen bg-green text-beige pb-24">
            <div className="w-5/6 xl:w-4/6 mx-auto pt-36 pb-16">
                <div onClick={() => navigate('/proyectos')} className="relative w-6 md:w-8 cursor-pointer mb-12">
                    <img src={arrowBack} alt="" className="w-full" />
                </div>

                <div className="relative flex items-center justify-center">
                    <h2 className="font-primary text-center text-3xl md:text-5xl font-medium text-yellow">
                        {currentProject?.title}
                    </h2>
                </div>
                <p className="taller-p1 text-sm md:text-[1.4rem] md:leading-8 font-medium my-8 md:my-12">
                    {currentProject?.subtitle}
                </p>

                {currentProject?.subdivisions?.map((subdivision, index, array) => (
                    <div id={subdivision.key} className="">
                        <h3
                            className={`taller-subtitle${
                                index + 1
                            } text-yellow w-full text-3xl md:text-4xl font-bold mb-4 md:mb-16`}
                        >
                            {subdivision?.title}
                        </h3>
                        <p
                            className={`taller-p${
                                index === 0 ? '2' : '4'
                            } text-sm md:text-[1.4rem] md:leading-8 font-medium`}
                        >
                            {subdivision?.description?.[0]}
                        </p>

                        <div className="my-8 md:grid md:grid-cols-2 md:gap-10">
                            <div className="w-full" key={index}>
                                <img
                                    src={subdivision?.mainImage}
                                    alt=""
                                    className={`taller-image${
                                        index === 0 ? '1' : '5'
                                    } w-full transition-all duration-300`}
                                />
                            </div>
                            {subdivision?.otherImages?.map((img, index2) => (
                                <div className="hidden md:inline-block w-full" key={index2}>
                                    <img
                                        src={img}
                                        alt=""
                                        className={`taller-image${
                                            index === 0 ? index2 + 2 : index2 + 6
                                        } w-full transition-all duration-300`}
                                    />
                                </div>
                            ))}
                        </div>

                        <p
                            className={`taller-p${
                                index === 0 ? '3' : '5'
                            } text-sm md:text-[1.4rem] md:leading-8 font-medium`}
                        >
                            {subdivision?.description?.[1]}
                        </p>
                        <div className="flex items-center text-yellow uppercase float-right mt-16">
                            <a
                                className="pb-1 border-b-1 md:border-b-2 text-xs md:text-base"
                                target="_blank"
                                rel="noreferrer"
                                href={`mailto:${subdivision?.email}`}
                            >
                                pedir más info
                            </a>
                        </div>
                        {index !== array.length - 1 && (
                            <hr className="border-0 w-full h-[1px] md:h-[2px] bg-beige mt-40 mb-20" />
                        )}
                    </div>
                ))}
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
    );
};

export default EntreMujeresPage;
