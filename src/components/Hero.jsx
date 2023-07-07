import React from 'react'
import hero_img from '../assets/img/image-hero-desktop.png';
import hero_img_sm from '../assets/img/image-hero-mobile.png'
import data_biz from '../assets/img/client-databiz.svg';
import audiophile from '../assets/img/client-audiophile.svg';
import meet from '../assets/img/client-meet.svg';
import maker from '../assets/img/client-maker.svg';


function Hero() {
  return (
			<div className="hero px-2 mb-5 md:mb-0">
				<div className="md:order-2 w-full md:px-2">
					<picture>
						<source media="(max-width:900px)" srcset={hero_img_sm} />
						<img
						src={hero_img}
						alt=""
						className="lg:w-[24rem] lg:h-[30rem] mx-auto "
					   />
					</picture>
				</div>
				<div className="h-fit mt-10 lg:mt-auto px-2">
					<h1 className="font-bold text-[3.5rem] w-fit leading-[4rem]">
						Make
						<br /> remote work
					</h1>
					<p className='pe-20 my-8'>
						Get your team in sync, no matter your location. Streamline processes,
						create team rituals, and watch productivity soar.
					</p>
					<button className='hero_button'>Learn more</button>
					<div className='flex justify-between items-center'>
						<img src={data_biz} alt="" />
						<img src={audiophile} alt="" />
						<img src={meet} alt="" />
						<img src={maker} alt="" />
					</div>
				</div>
			</div>
		);
}

export default Hero