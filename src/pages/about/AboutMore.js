import React, { useLayoutEffect } from 'react';
import clsx from 'clsx';
import { HashLink } from 'react-router-hash-link';

import arrowIcon from 'assets/images/arrow-down.svg';
import about4 from 'assets/images/about-4.jpeg';
import about5 from 'assets/images/about-5.jpg';
import about6 from 'assets/images/about-6.jpg';
import drawing1 from 'assets/images/drawing-1-beige.svg';
import drawing2 from 'assets/images/drawing-2.svg';

const AboutMore = ({ className, gsap }) => {
	useLayoutEffect(() => {
		const elementsArray = [
			'.about-image1',
			'.about-p2',
			'.about-p3',
			'.about-image2',
			'.about-p4',
			'.about-p5',
			'.about-image3',
			'.about-p6',
			'.about-p7',
			'.about-p8',
			'.about-p9'
		];

		elementsArray.forEach((elem, index) => {
			gsap.fromTo(
				elem,
				{
					opacity: 0
				},
				{
					opacity: 1,
					duration: 0.5,
					delay: 0.3,
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
		<div className={clsx('', className)}>
			<div className="snap-start h-[50vh] w-auto md:h-screen md:w-[50vw] mx-auto translate-y-[-15vh] overflow-hidden">
				<img className="about-image1 object-cover min-h-full min-w-full" src={about4} alt="" />
			</div>

			<div
				id="more"
				className="snap-start relative md:min-h-1000 lg:min-h-800 w-full my-4 md:my-auto text-green text-sm md:text-[1.4rem] md:leading-8 font-medium"
			>
				<div className="about-image2 hidden absolute md:flex items-center justify-center z-0 bottom-16 left-16 max-w-1/2 h-3/5 overflow-hidden">
					<img className="w-full" src={about5} alt="" />
				</div>
				<div className="relative z-10 w-4/6 mx-auto grow-0 md:pt-2 md:mt-0">
					<p className="about-p2">
						El cuerpo como herramienta sensible y discursiva, es otro gran interés y recurso expresivo en mi
						camino como hacedora.  La Tierra y los grandes misterios siempre guías. Busco y ejercito
						continuamente la co-creación, desde una vivencia genuina y situada.
					</p>
				</div>
				<div className="relative md:mt-16 mx-auto md:mr-16 z-10 w-4/6 md:w-[50%] md:float-right">
					<p className="about-p3 my-8">
						Desde el 2017 facilito talleres de cerámica de raiz preamericana con diversas temáticas como
						disparadores y otros recursos expresivos, como dispositivos para ampliar el imaginario. En la
						búsqueda de un hacer situado se indaga en las posibilidades que hay en el entorno para la
						recolección, investigación y uso de las arcillas locales. Como así también se hace énfasis en el
						porque y el para que de cada objeto/pieza que se realiza, un “estar(se) haciendo” constante.
					</p>
					<p className="about-p4 my-8">
						Tanto en mi trabajo pedagógico como las producciones de obras personales, busco desdibujar los
						límites trazados/impuestos en relación a las nociones de Arte – Artesanía.
					</p>
				</div>
			</div>

			<div className="snap-start min-h-screen w-full bg-green">
				<div className="w-5/6 md:w-4/6 mx-auto flex flex-col justify-center items-center">
					<div className="about-image3 h-[50vh] md:h-[70vh] my-4 md:mt-52 md:mb-24 w-full flex items-center overflow-hidden">
						<img className="w-full object-cover mt-32" src={about6} alt="" />
					</div>
					<div className="text-yellow text-sm md:text-[1.4rem] md:leading-8">
						<p className="about-p7 my-8">
							Gesté y coordiné desde el 2019 hasta fines del 2022 el proyecto, hoy colectivo de mujeres
							“ENTRE MUJERES Y EL BARRO” en la Localidad de profundidad, Mnes. A partir del 2020 comencé a
							ser parte del área de Artes del Fuego en El Parque del Conocimiento en Posadas Mnes. Desde
							mediados del 2020 empecé con la inquietud de recolectar historias de mujeres, lo que se
							convertiría tiempo después en un proyecto colectivo de mujeres artistas: RELATOS VISUALES,
							el cual sigue vivo, creciendo y ampliando sus horizontes.
						</p>
						<p className="about-p6 my-8">
							Participo de exposiciones colectivas desde el 2016 como expositora y gestora cultural.
						</p>

						<div className="flex items-center w-full overflow-hidden mt-8 mb-40 md:my-32">
							<div className="w-1/2 mr-8 md:mr-32">
								<img src={drawing1} alt="" />
							</div>
							<div className="w-1/2">
								<img src={drawing2} alt="" />
							</div>
						</div>
					</div>
				</div>
				<HashLink
					to="#top"
					className="absolute z-20 h-16 md:h-24 bottom-16 right-4 md:right-32 cursor-pointer rotate-180"
				>
					<img className="h-full" src={arrowIcon} alt="" />
				</HashLink>
			</div>
		</div>
	);
};

export default AboutMore;
