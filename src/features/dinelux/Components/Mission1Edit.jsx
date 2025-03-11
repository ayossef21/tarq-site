import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mission1Edit = () => {
	return (
		<div className='solution sp bg1 dinelux'>
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
								DineLux
							</span>
							<h2>A La Carte Restaurant Booking System</h2>
							<div className='space16'></div>
							<p>
								A state-of-the-art restaurant reservation
								platform designed exclusively for hotels and
								resorts, transforms traditional dining
								reservations with an innovative platform that
								allows Effortless reservations for guests,
								Streamlined management for hotel staff and
								Real-time insights into restaurant operations.
							</p>
							<div className='space16'></div>
							<p>
								Whether it&apos;s booking tables, managing capacity,
								or customizing preferences, DineLux is the
								all-in-one solution for modern dining.
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
									src='/assets/images/features/dinelux/hero/solution-img1.png'
									alt='img'
									width={178}
									height={134}
								/>
							</div>
							<div className='image2'>
								<Image
									src='/assets/images/features/dinelux/hero/solution-img2.png'
									alt='img'
									width={470}
									height={400}
								/>
							</div>
							<div className='image3'>
								<Image
									src='/assets/images/features/dinelux/hero/solution-img3.png'
									alt='img'
									width={178}
									height={134}
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
