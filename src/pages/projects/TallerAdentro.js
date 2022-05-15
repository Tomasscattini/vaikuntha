import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';

import projects from 'data/projects';

import arrowBack from 'assets/images/arrow-back-yellow.svg';
import arrowOpen from 'assets/images/arrow-open-yellow.svg';

const EntreMujeresPage = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();
    const currentProject = projects['taller-adentro'];

    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scroll(0, 0);
        setColorScheme('yellow');
        setIsAppLogoVisible(false);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);
    return (
        <div className="min-h-screen bg-green text-beige">
            <div className="w-5/6 xl:w-4/6 mx-auto pt-24 pb-48">
                <div onClick={() => navigate('/proyectos')} className="cursor-pointer mb-12">
                    <img src={arrowBack} alt="" />
                </div>

                <div className="relative flex items-center">
                    <span
                        className="absolute left-0 top- 0 grid place-content-center shrink-0 bg-yellow text-green 
                                    font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                    my-2 mr-4"
                    >
                        {currentProject?.id}
                    </span>

                    <h2 className="font-primary text-center text-yellow w-full text-6xl font-medium">
                        {currentProject?.title}
                    </h2>
                </div>
                <p className="text-xl my-20">{currentProject?.subtitle}</p>

                {currentProject?.subdivisions?.map((subdivision, index, array) => (
                    <div className="">
                        <h3 className="text-yellow text-center w-full text-5xl font-medium mb-20">
                            {subdivision?.id}-{subdivision?.title}
                        </h3>
                        <p className="text-lg">{subdivision?.description?.[0]}</p>

                        <div className="my-20 grid grid-cols-2 gap-10">
                            <div className="w-full" key={index}>
                                <img
                                    src={subdivision?.mainImage}
                                    alt=""
                                    className="w-full rotate-[6deg] hover:rotate-0 transition-all duration-300"
                                />
                            </div>
                            {subdivision?.otherImages?.map((img, index) => (
                                <div className="w-full" key={index}>
                                    <img
                                        src={img}
                                        alt=""
                                        className={`w-full hover:rotate-0 transition-all duration-300 ${
                                            index === 2 ? 'rotate-[6deg] mt-20' : 'rotate-[-3deg] mt-10'
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>

                        <p className="text-lg">{subdivision?.description?.[1]}</p>
                        <div className="flex items-center text-yellow uppercase float-right mt-16">
                            <a
                                className="border-b-2"
                                target="_blank"
                                rel="noreferrer"
                                href={`mailto:${subdivision?.email}`}
                            >
                                pedir mas info
                            </a>
                            <img className="ml-4" src={arrowOpen} alt="" />
                        </div>
                        {index !== array.length - 1 && <hr className="border-0 w-full h-[2px] bg-yellow mt-40 mb-20" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EntreMujeresPage;
