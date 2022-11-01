import React, { useLayoutEffect } from 'react';
import clsx from 'clsx';
import { HashLink } from 'react-router-hash-link';

import arrowIcon from 'assets/images/arrow-down.svg';
import manyDrawings from 'assets/images/many-drawings.svg';

const AboutSummary = ({ className, gsap }) => {
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
        gsap.fromTo(
            '.about-drawings',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.5,
                delay: 0.3,
                scrollTrigger: {
                    trigger: '.about-drawings',
                    start: 'top center',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    return (
        <main
            id="summary"
            className={clsx(
                'snap-start relative bg-green md:h-screen pb-48 w-full flex justify-center pt-[25vh]',
                className
            )}
        >
            <div className="relative w-4/5 md:w-3/5 mx-auto grow-0">
                <div className="about-drawings absolute w-[60vw] md:w-[30vw] right-[-10vw] top-[-11rem] md:top-[-8rem]">
                    <img src={manyDrawings} alt="" />
                </div>
                <p className="about-p1 relative z-20 text-beige font-medium md:text-[1.6rem] md:leading-8">
                Vale (1989) Ceramista, artista plástica/visual, psicologa social.<br/><br/>
                Partiendo siempre de la pregunta como aliada, y un particular interés en la simpleza de lo cotidiano y subjetivo, donde se deja entrever la trama de la vida, indago a través de la cerámica tradicional y otras poéticas materiales/visuales.</p>
            </div>
            <HashLink to="#more" className="absolute z-20 bottom-24 right-4 h-16 md:h-24 md:right-32 cursor-pointer">
                <img className="h-full" src={arrowIcon} alt="" />
            </HashLink>
        </main>
    );
};

export default AboutSummary;
