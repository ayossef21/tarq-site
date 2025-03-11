// import Blog1 from '@/app/Components/Blog/Blog1';
import Choose1Edit from "@/features/home/Components/Choose/Choose1Edit";
import Cta1Edit from "@/shared/Components/Cta/Cta1Edit";
// import Project1 from '@/app/draft/Components/Project/Project1';
import Services1 from "@/features/home/Components/Services/Services1";
// import About1 from '@/app/draft/Components/About/About1';
import Award1Edit from "@/shared/Components/Award/Award1Edit";
import React from "react";
import HeroBannerEdit from "@/features/home/Components/HeroBanner/HeroBannerEdit";
import About1Edit from "@/features/home/Components/About/About1Edit";
import Team4Edit from "@/features/home/Components/Team/Team4Edit";

const Home = () => {
	return (
		<div>
			<HeroBannerEdit
				bgImg='/assets/images/bg/hero1-bg.png'
				subTitle={`${process.env.NEXT_PUBLIC_SITE_NAME}`}
				title="Empowering Businesses With Next-Gen <span class='after'><br />IT Solutions & Training</span>"
				content={`Welcome to ${process.env.NEXT_PUBLIC_SITE_NAME} where we specialise in delivering tailored technology and IT solutions designed to propel your business forward. From streamlining operations to and driving growth.`}
				btnName='Get Started Now'
				btnUrl='/about'
				image1='/assets/images/features/hero/hero1-image1-1.webp'
				// image2="/assets/images/features/hero/hero1-image2.webp"
				// shapeImage1="/assets/images/features/hero/hero1-image3.png"
				// shapeiamge2="/assets/images/features/hero/hero1-image4.png"
			></HeroBannerEdit>
			<Award1Edit></Award1Edit>
			<About1Edit
				image1='/assets/images/shared/features/about1-img1.webp'
				image2='/assets/images/features/hero/about1-img2.webp'
				supIcon='/assets/images/logo/logo-tarq-w.png'
				supTitle='Shape Your Success'
				supCon={`With Advanced IT Solutions & Training`}
				subTitle={`About ${process.env.NEXT_PUBLIC_SITE_NAME}`}
				Title='Discover Who We Are'
				TitleColored='Pioneering Innovation and Empowering Business'
				content={`${process.env.NEXT_PUBLIC_SITE_NAME}, founded in the UAE, is a leading provider of advanced IT training and cutting-edge software solutions. With over 15 years of experience, we specialize in empowering businesses and professionals by delivering expert training in the latest technologies.`}
				featurelist={[
					"Transforming Technology, Empowering Tomorrow.",
					"Advancing Expertise, Delivering Excellence.",
					"Reliable Solutions, Revolutionizing Industries.",
					"Quality First, Innovation Always.",
				]}
				btnName='Discover More'
				btnUrl='/about'></About1Edit>
			<Services1></Services1>
			<Choose1Edit></Choose1Edit>
			<Team4Edit></Team4Edit>
			{/* <Pricing1></Pricing1> */}
			{/* <Testimonial1></Testimonial1> */}
			{/* <Blog1></Blog1> */}
			<Cta1Edit
				title={`At ${process.env.NEXT_PUBLIC_SITE_NAME} We Are Committed to Excellence`}
				content={`We empower businesses with high-performance software solutions and expert IT training, designed to drive innovation and efficiency.
                    Whether you&#39;re a startup, SaaS provider, or enterprise, our tailored approach ensures you stay ahead in the digital world.
                    <br /> <strong style="fontSize: 26px">Ready to take your business to the next level?</strong>
                    `}
				linkText={"Request a Meeting"}
				linkHref={"#"}></Cta1Edit>
		</div>
	);
};

export default Home;
