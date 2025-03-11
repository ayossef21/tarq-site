import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

const ServiceList = ({ icon, title, link, description, animation }) => {
	return (
		<div data-aos={animation.type} data-aos-duration={animation.duration}>
			<div className='service3-box'>
				<div className=''>
					<div className='icon'>
						<Image src={icon} alt={title} width={24} height={24} />
					</div>
				</div>
				<div className='heading3'>
					<h4>
						<a style={{
                            cursor: "auto"
                        }}>{title}</a>
					</h4>
					<div className='space16'></div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceList;
