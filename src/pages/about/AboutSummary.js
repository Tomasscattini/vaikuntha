import React from 'react';
import arrowIcon from 'assets/images/arrow.png';
import moonIcon from 'assets/images/moon.png';
import { HashLink } from 'react-router-hash-link';

const AboutSummary = () => {
    return (
        <main id="summary" className="relative bg-green h-screen w-full flex justify-center pt-[25vh]">
            <div className="relative w-2/5 mx-auto grow-0">
                <div className="absolute right-[-8rem] bottom-44">
                    <img src={moonIcon} alt="" />
                </div>
                <p className="text-beige  text-[1.4rem] leading-8">
                    Por los caminos descalza desde muy chiquita, mis pies se fueron tiñendo de rojo como la tierra que
                    me vió nacer.
                    <br /> La curiosidad me llevó a la carrera de Artes Plásticas en La Plata UNLP, se abrían otros
                    mundos ante mis ojos. La experimentación, lo diverso y los viajes fueron desvistiéndome de ideas y
                    mandatos.
                </p>
            </div>
            <HashLink to="#more" className="absolute z-20 bottom-16 right-32 cursor-pointer">
                <img src={arrowIcon} alt="" />
            </HashLink>
        </main>
    );
};

export default AboutSummary;
