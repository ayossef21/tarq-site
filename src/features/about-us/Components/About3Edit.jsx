import SectionTitle from "@/shared/Components/SectionTitle";
import Link from "next/link";
import React from "react";
const featurelist = [
	"Transforming Technology, Empowering Tomorrow.",
	"Advancing Expertise, Delivering Excellence.",
	"Reliable Solutions, Revolutionizing Industries.",
	"Quality First, Innovation Always.",
];
const About3Edit = () => {
	return (
		<div className='about3 sp'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6'>
						<div className='heading1'>
							<SectionTitle
								SubTitle='Empowering Innovation'
								Title='Driving Success'></SectionTitle>
							<div className='space16'></div>
							<p data-aos='fade-right' data-aos-duration='700'>
								{process.env.NEXT_PUBLIC_SITE_NAME} is dedicated
								to transforming industries through innovation,
								expertise, and reliability. We empower
								businesses and professionals with advanced IT
								training and cutting-edge software solutions,
								driving progress in a rapidly evolving digital
								world.
							</p>
							{/* <div className="row">
                    <div className="col-lg-6">
                      <div className="about3-box" data-aos="fade-right" data-aos-duration="900">
                        <h5>Our Story</h5>
                        <div className="space10"></div>
                        <p>Established in 1975, TechXen was born out of a passion for pushing the boundaries of what is possible.</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="about3-box" data-aos="fade-right" data-aos-duration="700">
                        <h5>Our Mission</h5>
                        <div className="space10"></div>
                        <p>Our mission is clear: to empower organizations and individuals with transformative technology solutions.</p>
                      </div>
                    </div>

                  </div>
                  <div className="space30"></div>
                  <div className="" data-aos="fade-right" data-aos-duration="1100">
                    <Link className="theme-btn4 btn--ripple ripple" href="/about">Get Started Now <i className="bi bi-arrow-right"></i></Link>
                  </div> */}
							<ul
								className='about-list'
								data-aos='fade-left'
								data-aos-duration='1100'>
								{featurelist?.map((item, index) => (
									<li key={index}>
										<span className='about-list-icon'>
											<i className='bi bi-check-lg'></i>
										</span>{" "}
										<span>{item}</span>
									</li>
								))}
							</ul>
							<div className='space30'></div>
							<p
								style={{
									fontSize: "28px",
									color: "var(--ztc-bg-main-bg-1)",
									fontWeight: "var(--f-fw-blod)",
								}}>
								Together We Innovate, Together We Succeed
							</p>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='about3-images'>
							<div className='cs_height_118 cs_height_lg_70'></div>
							<div className='cs_case_study_1_list'>
								<div className='cs_case_study cs_style_1 cs_hover_active'>
									<div
										className='cs_case_study_thumb cs_bg_filed'
										data-src='assets/images/shared/features/about1-img1.webp'></div>
								</div>
								<div className='cs_case_study cs_style_1 cs_hover_active'>
									<div
										className='cs_case_study_thumb cs_case_study_thumb2 cs_bg_filed'
										data-src='assets/images/shared/features/about1-img1.webp'></div>
								</div>
								<div className='cs_case_study cs_style_1 cs_hover_active'>
									<div
										className='cs_case_study_thumb cs_case_study_thumb3 cs_bg_filed'
										data-src='assets/images/shared/features/about1-img1.webp'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About3Edit;
