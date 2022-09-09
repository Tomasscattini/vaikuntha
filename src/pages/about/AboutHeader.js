import React from 'react';

import about1 from 'assets/images/about-bg.jpg';
import about2 from 'assets/images/about-2.jpg';
import about3 from 'assets/images/about-3.jpg';

const AboutHeader = () => {
    return (
        <header className="snap-start min-h-screen md:h-screen flex flex-col justify-between pt-28">
            <div className="relative z-20 w-5/6 xl:w-4/6 sm:w-3/4 mx-auto transition-all duration-300">
                <h2 className="inline-block w-24 md:w-40 relative  mt-16 md:mt-[20vh] mb-8 font-primary text-yellow text-4xl md:text-7xl font-medium">
                    <span className="absolute right-0 top-0">Quien</span>
                    <span className="absolute whitespace-nowrap text-[3.5rem] md:text-[8rem] font-secondary font-bold animate-translate-word-2-small md:animate-translate-word-2">
                        voy siendo
                    </span>
                </h2>
            </div>
            <div className="flex w-full h-[70vh] md:h-[56.1vh]">
                <div className="basis-full md:basis-1/4">
                    <img className="w-full h-full object-cover" src={about1} alt="" />
                </div>
                <div className="hidden md:inline-block md:basis-2/4">
                    <img className="w-full h-full object-cover" src={about2} alt="" />
                </div>
                <div className="hidden md:inline-block basis-1/4">
                    <img className="w-full h-full object-cover" src={about3} alt="" />
                </div>
            </div>
        </header>
    );
};

export default AboutHeader;
