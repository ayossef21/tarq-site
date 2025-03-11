import Image from "next/image";
import data from "@/features/home/Data/realDataOurTeam.json";
import SectionTitle from "@/shared/Components/SectionTitle";
import React from "react";
import { Link } from "@/i18n/routing";

const Team4Edit = () => {
	return (
		<div className='team2-edit team-page sp'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 m-auto text-center'>
						<div className='heading1'>
							<SectionTitle
								SubTitle='Our Team'
								Title='A Team of Experts, Delivering Tomorrow’s Solutions'></SectionTitle>
						</div>
					</div>
				</div>
				<div className='space30'></div>
				<div className='row justify-content-between'>
					{data.map((item, i) => (
						<div key={i} className='col-lg-3 col-md-6'>
							<div className='team-box'>
								<div className='image-area'>
									<div className='image'>
										<Image
											src={item.icon}
											alt='img'
											width={306}
											height={397}
										/>
									</div>
									<div className='icon-area'>
										<ul>
											<li>
												<Link
													target='_blank'
													href={item.linkedIn}>
													<i className='bi bi-linkedin'></i>
												</Link>
											</li>
											<li>
												<Link
													href={`mailto:${item.gmail}`}>
													<i className='bi bi-envelope-at'></i>
												</Link>
											</li>
											<li>
												<Link href={item.website}>
													<i className='bi bi-globe'></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className='space30'></div>
								<div className='heading1'>
									<h4>
										<a href='#'>{item.title}</a>
									</h4>
									<div className='space10'></div>
									<p>{item.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team4Edit;
