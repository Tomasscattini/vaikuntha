import React from 'react';
import { HashLink } from 'react-router-hash-link';

import arrowIcon from 'assets/images/arrow-down.svg';
import manyDrawings from 'assets/images/many-drawings.svg';

const AboutSummary = () => {
    return (
        <main id="summary" className="snap-start relative bg-green h-screen w-full flex justify-center pt-[25vh]">
            <div className="relative w-2/5 mx-auto grow-0">
                <div className="absolute w-[30vw] right-[-20vw] top-[-8rem]">
                    <img src={manyDrawings} alt="" />
                </div>
                <p className="relative z-20 text-beige  text-[1.4rem] leading-8">
                    Partiendo siempre de la pregunta como aliada, indago a través de la cerámica tradicional y otras
                    poéticas materiales / visuales los bastos modos de ser y estar en esta forma de existencia. La
                    Tierra y los grandes misterios siempre guías. Desde una construcción colectiva, acentuando en la
                    práctica taller adentro, generador de un conocimiento situado, y los espacios públicos, donde el
                    hacer es compartido y popular, me despliego y voy siendo.
                </p>
            </div>
            <HashLink to="#more" className="absolute z-20 bottom-24 right-32 cursor-pointer">
                <img src={arrowIcon} alt="" />
            </HashLink>
        </main>
    );
};

export default AboutSummary;
