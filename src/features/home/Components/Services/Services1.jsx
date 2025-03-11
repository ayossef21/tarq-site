import SectionTitle from "@/shared/Components/SectionTitle";
import data from "@/features/home/Data/services1.json";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Services1 = () => {
	return (
		<div className='service sp'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 m-auto text-center'>
						<div className='heading1'>
							<SectionTitle
								SubTitle='Our Services'
								Title='Unlock Your Potential with Cutting-Edge Technology & Expert Training'
								style={{
									fontSize: "38px",
								}}></SectionTitle>
						</div>
					</div>
				</div>

				<div className='space30'></div>
				<div className='row'>
					{data.map((item, i) => (
						<div
							key={i}
							className={item.addClass}
							data-aos='zoom-in-up'
							data-aos-duration='700'>
							<div className='single-box'>
								<div className='icon'>
									<Image
										src={item.icon}
										alt='img'
										width={39}
										height={40}
									/>
								</div>
								<div className='heading1'>
									<h4>
										<a
										// href={item.btnLink}
										// style={{
										//     // pointerEvents: "none",
										//     cursor: "not-allowed",
										// }}
										>
											{item.title}
										</a>
									</h4>
									<div className='space16'></div>
									<p
										title={item.desc}
										style={{
											display: "-webkit-box",
											WebkitLineClamp:
												"2" /* Limits text to 2 lines */,
											WebkitBoxOrient: "vertical",
											overflow: "hidden",
										}}>
										{item.desc}
									</p>
									<div className='space16'></div>
									<a
										// href={item.btnLink}
										className='learn'
										style={{
											// pointerEvents: "none",
											cursor: "not-allowed",
										}}>
										{item.btnText}{" "}
										<span>
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
										</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services1;
