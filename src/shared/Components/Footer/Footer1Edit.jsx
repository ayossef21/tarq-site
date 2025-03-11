import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

const Footer1Edit = () => {
	return (
		<div className='footer1 _relative'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4 col-md-6 col-12'>
						<div className='single-footer-items footer-logo-area'>
							<div className='footer-logo'>
								<Link href='/'>
									<Image
										src='/assets/images/logo/footer/footer-logo1.png'
										alt='img'
										width={209}
										height={46}
									/>
								</Link>
							</div>
							<div className='space20'></div>
							<div className='heading1'>
								<p>
									At {process.env.NEXT_PUBLIC_SITE_NAME} IT
									Solutions, we are dedicated to delivering
									innovative technology solutions tailored to
									meet the unique needs of businesses like
									yours.{" "}
								</p>
							</div>
							<ul className='social-icon'>
								<li>
									<Link
										target='_blank'
										href={`mailto:${process.env.NEXT_PUBLIC_SITE_COMPANY_EMAIL}`}>
										<i className='bi bi-envelope-at'></i>
									</Link>
								</li>
								<li>
									<Link
										target='_blank'
										href='https://www.linkedin.com/company/tarqme/'>
										<i className='bi bi-linkedin'></i>
									</Link>
								</li>
								<li>
									<Link
										target='_blank'
										href='https://www.instagram.com/dinelux_tarq_tech?igsh=NWkwMTQ3bWIwZ2cz'>
										<i className='bi bi-instagram'></i>
									</Link>
								</li>
								<li>
									<Link
										target='_blank'
										href='https://www.facebook.com/share/1A5Y9gSBtv/'>
										<i className='bi bi-facebook'></i>
									</Link>
								</li>
								<li>
									<Link
										target='_blank'
										href='https://www.youtube.com/@abdallah.21'>
										<i className='bi bi-youtube'></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='col-lg col-md-6 col-12'>
						<div className='single-footer-items'>
							<h3>Service We Offer</h3>

							<ul className='menu-list'>
								<li>
									<a
										style={{
											// pointerEvents: "none",
											cursor: "not-allowed",
										}}>
										Advanced IT Training
									</a>
								</li>
								<li>
									<a
										style={{
											// pointerEvents: "none",
											cursor: "not-allowed",
										}}>
										Software Solutions
									</a>
								</li>
								<li>
									<a
										style={{
											// pointerEvents: "none",
											cursor: "not-allowed",
										}}>
										Digital Transformation Consulting
									</a>
								</li>
								<li>
									<a
										style={{
											// pointerEvents: "none",
											cursor: "not-allowed",
										}}>
										Cybersecurity Services
									</a>
								</li>
								<li>
									<a
										style={{
											// pointerEvents: "none",
											cursor: "not-allowed",
										}}>
										Cloud Solutions
									</a>
								</li>
								<li>
									<a
										style={{
											// pointerEvents: "none",
											cursor: "not-allowed",
										}}>
										Data Visualization, ML, and AI
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='col-lg col-md-6 col-12'>
						<div className='single-footer-items'>
							<h3>Useful Links</h3>

							<ul className='menu-list'>
								<li>
									<Link href='/about'>About Us</Link>
								</li>
								<li>
									<a
                                    style={{
                                        // pointerEvents: "none",
                                        cursor: "not-allowed",
                                    }}
                                    >Our team</a>
								</li>
								<li>
									<a
                                    style={{
                                        // pointerEvents: "none",
                                        cursor: "not-allowed",
                                    }}
                                    >Services</a>
								</li>
								<li>
									<Link href='/clients'>Clients</Link>
								</li>
								<li>
									<a>Contact Us</a>
								</li>
								<li>
									<a
                                    style={{
                                        // pointerEvents: "none",
                                        cursor: "not-allowed",
                                    }}
                                    >Blog</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='col-lg-3 col-md-6 col-12'>
						<div className='single-footer-items'>
							<h3 id='contact-us'>Contact Us</h3>

							{/* <div className="contact-box">
                                <div className="icon">
                                    <Image src="/assets/img/icons/footer1-icon1.png" alt="img" width={24} height={24} />
                                </div>
                                <div className="pera">
                                    <a href="tel:0500222333">0500 222 333</a>
                                </div>
                            </div> */}

							<div className='contact-box'>
								<div className='icon'>
									<Image
										src='/assets/images/icons/footer/footer1-icon2.png'
										alt='img'
										width={24}
										height={24}
									/>
								</div>
								<div className='pera'>
									<a href='tel:+971561690821'>
										+9715616908217
									</a>
								</div>
							</div>

							<div className='contact-box'>
								<div className='icon'>
									<Image
										src='/assets/images/icons/footer/footer1-icon3.png'
										alt='img'
										width={24}
										height={24}
									/>
								</div>
								<div className='pera'>
									<a
										href={`mailto:${process.env.NEXT_PUBLIC_SITE_COMPANY_EMAIL}`}>{`${process.env.NEXT_PUBLIC_SITE_COMPANY_EMAIL}`}</a>
								</div>
							</div>

							{/* <div className="contact-box">
                                <div className="icon">
                                    <Image src="/assets/img/icons/footer1-icon4.png" alt="img" width={24} height={24} />
                                </div>
                                <div className="pera">
                                    <a href="mailto:admin@techxen.org">www.techxen.org</a>
                                </div>
                            </div> */}
						</div>
					</div>
				</div>

				<div className='space40'></div>
			</div>

			<div className='copyright-area'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-5'>
							<div className='coppyright'>
								<p>
									Copyright @2024{" "}
									{process.env.NEXT_PUBLIC_SITE_NAME}. All
									Rights Reserved
								</p>
							</div>
						</div>
						<div className='col-md-7'>
							<div className='coppyright right-area'>
								<Link href='#'>Terms & Conditions</Link>
								<Link href='#'>Privacy Policy</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer1Edit;