import Link from "next/link";
import React from "react";

const Cta1Edit = () => {
    return (
        <div className="cta">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="heading1-w">
                            <h2 className="title tg-element-title">At {process.env.NEXT_PUBLIC_SITE_NAME} We Are Committed to Excellence</h2>
                            <div className="space16"></div>
                            <p data-aos="fade-right" data-aos-duration="700">
                                We empower businesses with high-performance software solutions and expert IT training, designed to drive innovation and efficiency. Whether you&#39;re a startup, SaaS provider, or enterprise, our tailored approach ensures you stay ahead in the digital world.
                                <br />
                                <strong style={{ fontSize: "26px" }}>Ready to take your business to the next level?</strong>
                            </p>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="buttons">
                            <Link className="cta-btn1" href="/service">
                                Request a Meeting
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                    </svg>
                                </span>
                            </Link>
                            {/* <Link className="cta-btn2" href="/service">Explore Solution <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                </svg>
                            </span></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta1Edit;