"use client";
import loadBackgroudImages from "@/app/draft/Components/Common/loadBackgroudImages";
// import VideoModal from "@/app/draft/Components/VideoModal/VideoModal";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const HeroBannerEdit = ({
    bgImg,
    subTitle,
    title,
    content,
    btnName,
    btnUrl,
    image1,
    // image2,
    // shapeImage1,
    // shapeiamge2,
}) => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const [iframeSrc, setIframeSrc] = useState("about:blank");
    const [toggle, setToggle] = useState(false);

    const handelClick = () => {
        setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
        setToggle(!toggle);
    };
    const handelClose = () => {
        setIframeSrc("about:blank");
        setToggle(!toggle);
    };

    return (
        <div className='hero_main_area1'>
            <div className='hero1' data-background={bgImg}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <div className='main-headding'>
                                <span
                                    className='span'
                                    data-aos='zoom-in-left'
                                    data-aos-duration='700'>
                                    <Image
                                        src='/assets/images/shared/icons/span1.png'
                                        alt='img'
                                        width={18}
                                        height={16}
                                    />
                                    {subTitle}
                                </span>
                                <h1 className='title tg-element-title'>
                                    {parse(title)}
                                </h1>
                                <div className='space16'></div>
                                <p>{content}</p>

                                <div className='space30'></div>
                                <div className='buttons'>
                                    <Link className='theme-btn1' href={btnUrl}>
                                        {btnName}{" "}
                                        <span>
                                            <i className='bi bi-arrow-right'></i>
                                        </span>
                                    </Link>
                                    {/* <span
                                        onClick={handelClick}
                                        className='play-btn'>
                                        <span>
                                            <i className='bi bi-play'></i>
                                        </span>{" "}
                                        Watch Demo Video
                                    </span> */}
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-7'>
                            <div className='hero1-all-images'>
                                <div className='image1 '>
                                    <Image
                                        src={image1}
                                        alt='img'
                                        width={488}
                                        height={487}
                                    />
                                </div>
                                {/* <div className='image2'>
                                    <Image
                                        src={image2}
                                        alt='img'
                                        width={595}
                                        height={585}
                                    />
                                </div> */}
                                {/* <div className='image3 shape-animaiton3'>
                                    <Image
                                        src={shapeImage1}
                                        alt='img'
                                        width={252}
                                        height={72}
                                    />
                                </div> */}
                                {/* <div className="image4 shape-animaiton3">
                                <Image src={shapeiamge2} alt="img" width={332} height={162}   />
                                </div> */}
                                <div className='shape1'>
                                    <Image
                                        src='/assets/images/features/hero/shapes/header1-shape1.png'
                                        alt='img'
                                        width={131}
                                        height={130}
                                    />
                                </div>
                                <div className='shape2'>
                                    <Image
                                        src='/assets/images/features/hero/shapes/header1-shape2.png'
                                        alt='img'
                                        width={110}
                                        height={69}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <VideoModal
                isTrue={toggle}
                iframeSrc={iframeSrc}
                handelClose={handelClose}></VideoModal> */}
        </div>
    );
};

HeroBannerEdit.propTypes = {
    bgImg: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    btnName: PropTypes.string,
    btnUrl: PropTypes.string,
    image1: PropTypes.string,
    // image2: PropTypes.string,
    // shapeImage1: PropTypes.string,
    // shapeiamge2: PropTypes.string,
};

export default HeroBannerEdit;
