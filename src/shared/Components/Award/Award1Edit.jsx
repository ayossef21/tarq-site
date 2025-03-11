import Image from 'next/image';
import data from '@/shared/Data/award1.json';
import React from 'react';

const Award1Edit = () => {
    return (
        <div className="">
            <div className="container">
                <div className="row hero-bottom-area justify-content-between">
                    {data.map((item, i) => (
                        <div key={i} className={i === 0 || i === 2 ? "col-lg-4" : "col-lg-3"}>
                            <div className="single-box">
                                <div className="icon">
                                    <Image src={item.img} alt="img" width={28} height={28} />
                                </div>
                                <div className="headding">
                                    <h5>{item.title}</h5>
                                    {/* <p>{item.desc}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Award1Edit;