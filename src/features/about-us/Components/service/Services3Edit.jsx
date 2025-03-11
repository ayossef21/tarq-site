import SectionTitle from "@/shared/Components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceList from "./ServiceList";
import servicesRight from "@/features/about-us/Data/right-list.json";
import servicesLeft from "@/features/about-us/Data/left-list.json";

const Services3Edit = () => {
	return (
		<div className='service3 about-us sp'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 m-auto text-center'>
						<div className='heading1'>
							<SectionTitle
								SubTitle='TARQ Values'
								Title='The Principles That Define Us'></SectionTitle>
						</div>
					</div>
				</div>

				<div className='space30'></div>
				<div className='row align-items-center'>
					<div className='col-lg-4'>
						{servicesLeft.map((service, index) => (
							<ServiceList key={index} {...service} />
						))}
					</div>

					<div className='col-lg-4'>
						<div className='main-image image-anime'>
							<Image
								src='/assets/images/features/about/Human-Centric.jpg'
								alt='img'
								width={416}
								height={577}
							/>
						</div>
					</div>
					<div className='col-lg-4'>
						{servicesRight.map((service, index) => (
							<ServiceList key={index} {...service} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services3Edit;
