import Link from 'next/link';
import data from '@/features/dinelux/Data/work4.json';
import React from 'react';
import SectionTitle from '@/shared/Components/SectionTitle';

const HowWork3Edit = () => {
    return (
        <div className="work4 dineLux sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="heading1">
                            <SectionTitle
                                SubTitle="DineLux Key Features"
                                Title="Simplifies reservations, enhances guest experiences and smooth operations"
                            ></SectionTitle>
                        </div>
                    </div>
                </div>

                <div className="space30"></div>
                <div className="row">

                {/* In the JSON file, you can add the 'active' class to the 'addClass' key to make any card active by default */}
                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1200">
                        <div className={item.addClass}>
                            <span className="after">{item.subtitle}</span>
                            <h4>{item.title}</h4>
                            <div className="space16"></div>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default HowWork3Edit;