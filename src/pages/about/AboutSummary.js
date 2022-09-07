import React, { useLayoutEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import arrowIcon from 'assets/images/arrow-down.svg';
import manyDrawings from 'assets/images/many-drawings.svg';

const AboutSummary = ({ gsap }) => {
    useLayoutEffect(() => {
        gsap.fromTo(
            '.about-p1',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.5,
                delay: 0.3,
                scrollTrigger: {
                    trigger: '.about-p1',
                    start: 'top bottom-=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    return (
        <main
            id="summary"
            className="snap-start relative bg-green md:h-screen pb-48 w-full flex justify-center pt-[25vh]"
        >
            <div className="relative w-4/5 md:w-2/5 mx-auto grow-0">
                <div className="absolute w-[60vw] md:w-[30vw] right-[-20vw] top-[-11rem] md:top-[-8rem]">
                    <img src={manyDrawings} alt="" />
                </div>
                <p className="about-p1 relative z-20 text-beige text-sm md:text-[1.4rem] md:leading-8">
                    Partiendo siempre de la pregunta como aliada, y un particular interés en la simpleza de lo cotidiano
                    y subjetivo, donde se deja entrever la trama de la existencia, indago a través de la cerámica
                    tradicional y otras poéticas materiales/visuales. El cuerpo como herramienta sensible y discursiva,
                    es otro gran interés y recurso expresivo en mi camino como hacedora. La Tierra y los grandes
                    misterios siempre guías.
                    <br />
                    Buscando y ejercitando continuamente la co-creación, desde una vivencia genuina y sensible.
                    Traduciendo lo que me atraviesa en lenguaje simbólico.
                </p>
            </div>
            <HashLink to="#more" className="absolute z-20 bottom-24 right-4 h-16 md:h-24 md:right-32 cursor-pointer">
                <img className="h-full" src={arrowIcon} alt="" />
            </HashLink>
        </main>
    );
};

export default AboutSummary;
