import Brand1 from "@/app/draft/Components/Brand/Brand1";
import Cta4 from "@/app/draft/Components/Cta/Cta4";
import Faq2 from "@/app/draft/Components/Faq/Faq2";
import HeroBanner5 from "@/app/draft/Components/HeroBanner/HeroBanner5";
import HowWork4 from "@/app/draft/Components/HowWork/HowWork4";
import Services5 from "@/app/draft/Components/Services/Services5";
import Skill1 from "@/app/draft/Components/Skill/Skill1";
import Team3 from "@/app/draft/Components/Team/Team3";
import Testimonial4 from "@/app/draft/Components/Testimonial/Testimonial4";
import About5 from "@/app/draft/Components/About/About5";
import Blog5 from "@/app/draft/Components/Blog/Blog5";
import React from "react";

const page = () => {
	return (
		<div>
			<HeroBanner5
				subtitle='Our Integrated IT Solutions'
				title='Harness Technology Drive Growth with Our IT Solutions'
				content='Welcome to Your Company Techniq where innovative IT solutions meet your business needs head-on.'
				btnone='Free Consultation'
				btnoneurl='/service'
				btntwo='Discover More'
				btntwourl='/service'
				image1='/assets/img/hero/hero7-image.png'
				shape2='/assets/img/shapes/hero7-shape1.png'
				shape3='/assets/img/shapes/hero7-shape2.png'
				shape4='/assets/img/shapes/hero7-shape3.png'
				shape5='/assets/img/shapes/hero7-shape7.png'></HeroBanner5>
			<About5
				image1='/assets/img/about/about7-image.png'
				experienceNum='20+'
				experienceTitle='Year Of Experience'
				subTitle='About Us'
				title='Transforming Industries with Technology <span>Our Commitment</span>'
				content="At Your Company Name, we are passionate about leveraging technology to drive meaningful change. With a team of seasoned experts in IT solutions, we're committed to delivering cutting."
				featurelist={[
					"Highlight the unique features or benefits",
					"Provide a brief overview of each solution",
					"Present your main solutions/services.",
				]}
				btnname='Learn More'
				btnurl='/about'></About5>
			<Services5></Services5>
			<HowWork4></HowWork4>
			<Skill1></Skill1>
			<Testimonial4></Testimonial4>
			<Team3></Team3>
			<Faq2></Faq2>
			<Brand1></Brand1>
			<Blog5></Blog5>
			<Cta4></Cta4>
		</div>
	);
};

export default page;
