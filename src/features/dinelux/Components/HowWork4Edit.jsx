import Link from "next/link";
import data from "@/features/dinelux/Data/work5.json";
import SectionTitle3 from "@/app/draft/Components/Common/SectionTitle3";
import Image from "next/image";
import React from "react";

const HowWork4Edit = () => {
	const leftContent = {
		// Content:'Dive into our portfolio to see how we have helped businesses like yours overcome challenges, achieve their goals, and thrive in todays digital landscape  robust cybersecurity solutions.',
		// btnName:'View Our Work',
		// btnUrl:'/about',
		img1: "/assets/images/features/dinelux/dineLuxBenefits/03-Benefits-for-Everyone.jpg",
	};

	return (
		<div className='work7 dinelux sp'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6'>
						<div className='work7-image-area image-anime'>
							<Image
								src={leftContent.img1}
								alt='img'
								width={636}
								height={475}
							/>
							<div className='space20'></div>
							<div className='heading7'>
								{/* <p>{leftContent.Content}</p> */}
								<div className='space20'></div>
								{/* <div className="">
                                    <Link className="theme-btn13" href={leftContent.btnUrl}><span className="text">{leftContent.btnName}</span> <span className="arrows"><span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></span></Link>
                                </div> */}
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='heading7'>
							<SectionTitle3
								SubTitle=''
								Title='<span>DineLux Benefits</span><br />Benefits for Everyone'
								content='A smart solution for guests, staff, and management—offering effortless reservations, streamlined operations, and secure, data-driven insights for an enhanced dining experience, Simply Benefits for Everyone:'></SectionTitle3>

							{data.map((item, i) => (
								<div
									key={i}
									className='work-box'
									data-aos='fade-left'
									data-aos-duration='900'>
									<div className='icon'>
										<span>
											<i className='bi bi-check-lg'></i>
										</span>
									</div>
									<div className='heading'>
										<h4>
											<a>{item.title}</a>
										</h4>
										<div className='space16'></div>
										<p>{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowWork4Edit;
