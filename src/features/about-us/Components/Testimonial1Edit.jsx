"use client";
import Slider from "react-slick";
// import data from "@/features/dinelux/Data/testimonial1.json";
import SectionTitle from "@/shared/Components/SectionTitle";
import React from "react";
import Image from "next/image";

const Testimonial1Edit = () => {
	// const sliderRef = useRef(null);

	// const next = () => {
	// 	sliderRef.current.slickNext();
	// };

	// const previous = () => {
	// 	sliderRef.current.slickPrev();
	// };

	// const settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	speed: 2000,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	swipeToSlide: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1399,
	// 			settings: {
	// 				slidesToShow: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 1199,
	// 			settings: {
	// 				slidesToShow: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 575,
	// 			settings: {
	// 				slidesToShow: 1,
	// 			},
	// 		},
	// 	],
	// };

	return (
		<div className='testimonial about-us sp testimonial_area1'>
			<div className='container'>
				{/* <div className='row'>
					<div className='col-lg-8 m-auto text-center'>
						<div className='heading1'>
							<SectionTitle
								SubTitle='Vision'
								Title=''></SectionTitle>
						</div>
					</div>
				</div> */}

				<div className='row _relative'>
					<div className='tes1-slider'>
						{/* <Slider ref={sliderRef} {...settings}>
							{data.map((item, i) => ( */}
						<div className='tes1-single-slider'>
							<div className='row align-items-center'>
								<div className='col-lg-8'>
									<div className='right-side'>
										<div className='heading1'>
											<SectionTitle
												SubTitle='Vision'
                                                Title=""
												></SectionTitle>
										</div>
										<h2></h2>
                                        <p className="f-fs-font-fs20">
											To be a global leader in providing
											innovative training in the latest
											technologies and delivering
											transformative software solutions,
											empowering businesses and
											individuals to succeed in an
											ever-changing digital world.
										</p>
									</div>
								</div>

								<div className='col-lg-4'>
									<div className='left-side'>
										<Image
											src={
												"/assets/images/features/about/vision/03-Vision.jpg"
											}
											alt='img'
											width={391}
											height={419}
										/>
									</div>
								</div>
							</div>
						</div>
						{/* ))}
						</Slider> */}
					</div>

					{/* <div className='tes1-arrows'>
						<button
							onClick={previous}
							className='testimonial-prev-arrow'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								fill='currentColor'
								className='bi bi-arrow-left-short'
								viewBox='0 0 16 16'>
								<path
									fillRule='evenodd'
									d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5'
								/>
							</svg>
						</button>
						<button
							onClick={next}
							className='testimonial-next-arrow'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								fill='currentColor'
								className='bi bi-arrow-right-short'
								viewBox='0 0 16 16'>
								<path
									fillRule='evenodd'
									d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8'
								/>
							</svg>
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Testimonial1Edit;
