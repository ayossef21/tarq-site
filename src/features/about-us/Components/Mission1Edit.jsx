import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mission1Edit = () => {
	return (
		<div className='solution sp'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-6'>
						<div className='heading1'>
							<span className='span'>
								<Image
									src='/assets/images/shared/icons/span1.png'
									alt='img'
									width={18}
									height={16}
								/>
								Mission
							</span>
							{/* <h2>A La Carte Restaurant Booking System</h2> */}
							<div className='space16'></div>
							<p className='f-fs-font-fs20'>
								At {process.env.NEXT_PUBLIC_SITE_NAME}, our
								mission is to drive business growth and
								technological advancement by delivering
								cutting-edge IT training and innovative software
								solutions.
							</p>
							<div className='space16'></div>
							<p className='f-fs-font-fs20'>
								We are dedicated to equipping organizations and
								professionals with the expertise to navigate the
								complexities of the digital world, ensuring they
								are well-prepared to tackle tomorrow&apos;s
								challenges with confidence and success.
							</p>

							<div className='space30'></div>
							{/* <div className=''>
								<Link className='theme-btn1' href='/contact'>
									Get A Quote{" "}
									<span>
										<i className='bi bi-arrow-right'></i>
									</span>
								</Link>
							</div> */}
						</div>
					</div>

					<div className='col-lg-6'>
						<div className='solution-images'>
							<div className='image1'>
								<Image
									src='/assets/images/features/about/mission/Mission-2.jpg'
									alt='img'
									width={178}
									height={134}
									className='b-r-8 b-2-w'
								/>
							</div>
							<div className='image2'>
								<Image
									src='/assets/images/features/about/mission/Mission-1.jpg'
									alt='img'
									width={470}
									height={400}
									className='b-r-8'
								/>
							</div>
							<div className='image3'>
								<Image
									src='/assets/images/features/about/mission/Mission-3.jpg'
									alt='img'
									width={178}
									height={134}
									className='b-r-8 b-2-w'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission1Edit;
