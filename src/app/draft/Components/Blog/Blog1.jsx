import SectionTitle from "@/shared/Components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog1 = () => {
    return (
        <div className="blog sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="Blog & Latest News"
                        Title="Latest News & Blog"
                    ></SectionTitle>
                </div>
              </div>
            </div>
            <div className="space30"></div>
            <div className="row">
              <div className="col-lg-4">
                <div className="blog-box" data-aos="zoom-in-up" data-aos-duration="1100">
                  <div className="image image-anime">
                  <Image src="/assets/img/blog/blog-img1.png" alt="img" width={414} height={252}   />
                  </div>
                  <div className="heading">
                    <div className="tags">
                      <a href="#"><Image src="/assets/img/icons/blog-icon1.png" alt="img" width={16} height={16}   /> John William</a>
                      <a href="#"><Image src="/assets/img/icons/blog-icon2.png" alt="img" width={16} height={16}   /> Feb 25, 24</a>
                    </div>
                    <h4><Link href="/blog/blog-details">Demystifying Blockchain: How It is Revolutionising Industries.</Link></h4>
                    <Link href="/blog/blog-details" className="learn">Learn More <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="blog-box" data-aos="zoom-in-up" data-aos-duration="900">
                  <div className="image image-anime">
                  <Image src="/assets/img/blog/blog-img2.png" alt="img" width={414} height={252}   />
                  </div>
                  <div className="heading">
                    <div className="tags">
                    <a href="#"><Image src="/assets/img/icons/blog-icon1.png" alt="img" width={16} height={16}   /> John William</a>
                    <a href="#"><Image src="/assets/img/icons/blog-icon2.png" alt="img" width={16} height={16}   /> Feb 25, 24</a>
                    </div>
                    <h4><Link href="/blog/blog-details">Cybersecurity Essentials: Protecting Your Business </Link></h4>
                    <Link href="/blog/blog-details" className="learn"> Learn More <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="blog-box" data-aos="zoom-in-up" data-aos-duration="700">
                  <div className="image image-anime">
                  <Image src="/assets/img/blog/blog-img3.png" alt="img" width={414} height={252}   />
                  </div>
                  <div className="heading">
                    <div className="tags">
                    <a href="#"><Image src="/assets/img/icons/blog-icon1.png" alt="img" width={16} height={16}   /> John William</a>
                    <a href="#"><Image src="/assets/img/icons/blog-icon2.png" alt="img" width={16} height={16}   /> Feb 25, 24</a>
                    </div>
                    <h4><Link href="/blog/blog-details">The Future of Work: Embracing Remote Collaboration Tools</Link></h4>
                    <Link href="/blog/blog-details" className="learn"> Learn More <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
};

export default Blog1;