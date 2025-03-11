"use client";
import SectionTitle3 from "@/app/draft/Components/Common/SectionTitle3";
import data from "@/features/clients/Data/skill.json";
import React, { useEffect } from "react";
import loadBackgroudImages from "@/app/draft/Components/Common/loadBackgroudImages";
import Image from "next/image";
import SectionTitle from "@/shared/Components/SectionTitle";

const Skill1Edit = () => {
	useEffect(() => {
		loadBackgroudImages();
	}, []);

	return (
		<div className='skill7 sp bg1'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6'>
						<div className='heading1'>
							<SectionTitle
								SubTitle=''
								Title='Trusted by Clients Around the World'></SectionTitle>
							<div className='space16'></div>

							<p>
								With a presence spanning over 20 countries,
								{process.env.NEXT_PUBLIC_SITE_NAME} is proud to
								empower businesses and professionals worldwide.
								Our commitment to innovation, quality, and
								reliability has earned the trust of over 130
								clients, enabling us to deliver transformative
								IT training and cutting-edge software solutions
								across industries. No matter where our clients
								are, we provide tailored expertise to help them
								navigate the digital future with
								confidence and success.
							</p>
							<div className='space16'></div>

							<div className='porgress-line-all'>
								{data.map((item, i) => (
									<div
										key={i}
										className='progress-line'
										data-aos='fade-right'
										data-aos-duration='900'>
										<div className='heading'>
											<h6>{item.title}</h6>
											<p>{item.desc}</p>
										</div>
										<div className='progress'>
											<div
												className='progress-bar'
												style={{
													width: `${item.bar}%`,
												}}
												role='progressbar'
												aria-valuenow={item.bar}
												aria-valuemin='0'
												aria-valuemax='100'></div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className='col-lg-6'>
						<div
							className='image image-anime'
							data-aos='zoom-out'
							data-aos-duration='700'>
							<Image
								src='/assets/images/features/clients/Trusted-by-Clients-Around-the-World.jpg'
								alt='img'
								width={606}
								height={468}
								className='b-r-15'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill1Edit;
