import data from '@/features/dinelux/Data/services5.json';
import Image from 'next/image';
import React from 'react';
import SectionTitle from '@/shared/Components/SectionTitle';

const Services5Edit = () => {
    return (
        <div className="service7 dinelux sp bg1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        {/* <div className="heading7">
                            <SectionTitle3
                                SubTitle=""
                                Title="<span>span>"
                                content=""
                            ></SectionTitle3>
                        </div> */}
                        <div className='heading1'>
							<SectionTitle
								SubTitle='Additional Features and Services'
								Title='Effortless setup, staff training, and smart automation make DineLux a future-ready solution.'></SectionTitle>
						</div>
                    </div>
                </div>
                <div className="space30"></div>
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1200">
                        <div className="service7-box">
                            <div className="heading-area">
                                <div className="icon">
                                <Image src={item.icon} alt="img" width={32} height={32}   />
                                </div>
                                <div className="heading7">
                                    <h4><a>{item.title}</a></h4>
                                    <p> {item.desc}</p>
                                    {/* <Link href={item.btnLink} className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link> */}
                                </div>
                            </div>
                            <div className="image image-anime">
                            <Image src={item.image1} alt="img" width={416} height={281}   />
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Services5Edit;