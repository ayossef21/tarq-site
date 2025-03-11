import Image from "next/image";
import Link from "next/link";
import React from "react";

const Vission1Edit = () => {
	return (
		<div className='solution about-solution about-us sp bg1'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-6'>
						<div className='images'>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='image'>
										<Image
											src='/assets/images/features/about/Your-Partner-in-Advanced-IT-Solutions-&-Training-1.jpg'
											alt='img'
											width={636}
											height={357}
										/>
									</div>
								</div>

								<div className='col-lg-6'>
									<div className='space30'></div>
									<div className='image'>
										<Image
											src='/assets/images/features/about/Your-Partner-in-Advanced-IT-Solutions-&-Training-2.jpg'
											alt='img'
											width={306}
											height={283}
										/>
									</div>
								</div>

								<div className='col-lg-6'>
									<div className='space30'></div>
									<div className='image'>
										<Image
											src='/assets/images/features/about/Your-Partner-in-Advanced-IT-Solutions-&-Training-3.jpg'
											alt='img'
											width={306}
											height={283}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='heading1'>
							<span className='span'>
								<Image
									src='/assets/images/shared/icons/span1.png'
									alt='img'
									width={18}
									height={16}
								/>
								{process.env.NEXT_PUBLIC_SITE_NAME}
							</span>
							<h2>
								Your Partner in Advanced IT Solutions & Training
							</h2>
							<div className='space16'></div>
							<p className='f-fs-font-fs20'>
								{process.env.NEXT_PUBLIC_SITE_NAME}, founded in
								the UAE, is a leading provider of advanced IT
								training and cutting-edge software solutions.
								With over 15 years of experience, we specialize
								in empowering businesses and professionals by
								delivering expert training in the latest
								technologies, including data science,
								blockchain, artificial intelligence, and
								cybersecurity.
								<span
									className='space16'
									style={{ display: "block" }}></span>
								Our training programs are designed to equip
								individuals and teams with the skills needed to
								excel in a rapidly evolving digital landscape.
							</p>

							{/* <div className="item-box">
                  <div className="icon">
                    <div className="">
                    <Image src="/assets/img/icons/about-solution-iocn1.png" alt="img" width={28} height={28}   />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">Network Infrastructure Solutions</a></h3>
                    <div className="space10"></div>
                    <p>Build a reliable and secure network infrastructure that <br/> supports your business operations enables seamless</p>
                  </div>
                </div> */}

							{/* <div className="item-box">
                  <div className="icon">
                    <div className="">
                    <Image src="/assets/img/icons/about-solution-iocn2.png" alt="img" width={28} height={28}   />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">Managed It Services</a></h3>
                    <div className="space10"></div>
                    <p>Focus on your core business activities while we take <br/> care of your IT needs with our managed IT services.</p>
                  </div>
                </div> */}

							{/* <div className="space30"></div>
                <div className="">
                  <Link className="theme-btn1" href="/contact">Get A Quote <span><i className="bi bi-arrow-right"></i></span></Link>
                </div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vission1Edit;
