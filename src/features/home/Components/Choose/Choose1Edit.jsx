import Link from 'next/link';
import data from '@/features/home/Data/choose1.json';
import Image from 'next/image';
import React from 'react';

const Choose1Edit = () => {

    const mainContent = {
        subTitle: 'Best IT Solution',
        title: 'DineLux',
        titleSecondLine: 'A La Carte Restaurant Booking System',
        Content: 'a state-of-the-art restaurant reservation platform designed exclusively for hotels and resorts. It transforms the dining experience for guests and enhances operational efficiency for staff by automating reservations and providing personalized services. At DineLux, our mission is to create a flawless dining experience by addressing key challenges faced by hotels and resorts:',
        btnName: 'Discover More',
        btnUrl: '/dinelux',
        img1: '/assets/images/features/hero/dinelux/work-img1.webp',
        img2: '/assets/images/features/hero/dinelux/work-img3.webp',
        img3: '/assets/images/features/hero/dinelux/work-img2.webp',
    }

    return (
        <div className="work sp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="heading1">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                <Image src="/assets/images/shared/icons/span1.png" alt="img" width={18} height={16} />{mainContent.subTitle}</span>
                            <h2 className="title tg-element-title">
                                {mainContent.title}
                                <br />
                                <span style={{ color: "var(--ztc-bg-main-bg-1)" }}>
                                    {mainContent.titleSecondLine}
                                </span>
                                </h2>
                            <div className="space16"></div>
                            <p data-aos="fade-right" data-aos-duration="700">{mainContent.Content}</p>

                            {data.map((item, i) => (
                                <div key={i} className="single-items" data-aos="fade-right" data-aos-duration="700">
                                    <div className="">
                                        <div className="icon">
                                            <Image src={item.img} alt="img" width={24} height={20} />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h4><span>{item.title}</span></h4>
                                        <div className="space10"></div>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="space30"></div>
                        <div className="" data-aos="fade-right" data-aos-duration="800">
                            <Link className="theme-btn1" href={mainContent.btnUrl}>{mainContent.btnName} <span><i className="bi bi-arrow-right"></i></span></Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="work-images">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="image image-anime">
                                        <Image src={mainContent.img1} alt="img" width={306} height={363} />
                                    </div>
                                    <div className="image image-anime">
                                        <Image src={mainContent.img2} alt="img" width={306} height={363} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image image-anime">
                                        <Image src={mainContent.img3} alt="img" width={306} height={340} />
                                    </div>
                                </div>
                            </div>
                            <Image src="/assets/images/bg/work-bg.png" alt="img" className="bg-image shape-animaiton4" width={536} height={494} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose1Edit;