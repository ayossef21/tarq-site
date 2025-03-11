import About3 from "@/app/draft/Components/About/About3";
import About5 from "@/app/draft/Components/About/About5";
import About6 from "@/app/draft/Components/About/About6";
import BreadCumb from "@/app/draft/Components/Common/BreadCumb";
import Cta1 from "@/app/draft/Components/Cta/Cta1";
import MarqueeText from "@/app/draft/Components/MarqueeText/MarqueeText";
import Mission1 from "@/app/draft/Components/Mission/Mission1";
import Services3 from "@/app/draft/Components/Services/Services3";
import Team2 from "@/app/draft/Components/Team/Team2";
import Testimonial1 from "@/app/draft/Components/Testimonial/Testimonial1";
import About3Edit from "@/features/about-us/Components/About3Edit";
import About5Edit from "@/features/about-us/Components/About5Edit";
import Award1Edit from "@/shared/Components/Award/Award1Edit";
import Mission1Edit from "@/features/about-us/Components/Mission1Edit";
import Services3Edit from "@/features/about-us/Components/service/Services3Edit";
import Testimonial1Edit from "@/features/about-us/Components/Testimonial1Edit";
import Vission1Edit from "@/features/about-us/Components/Vission1Edit";
import Cta1Edit from "@/shared/Components/Cta/Cta1Edit";

const page = () => {
	return (
		<div>
			{/* <BreadCumb Title="About Us"></BreadCumb>
            <MarqueeText></MarqueeText>
            <About6
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum="25"
                experienceTitle="Years Of <br> Experience"
                subTitle="Our Service"
                title="Empower Your Business With Our Comprehensive IT Solutions"
                content="Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At TechXen, we are passionate about harnessing the power of technology to empower businesses a like."
                counName1="IT Consulting"
                CounNum1="100%"
                counName2="Cyber Security"
                CounNum2="98%"
            ></About6>
            <Mission1></Mission1>
            <Vission1></Vission1>
            <Testimonial1></Testimonial1>
            <Team2></Team2>
            <Cta1></Cta1> */}
			{/* About Light */}
			<Vission1Edit></Vission1Edit>
			{/* Home 05 */}
			<About5Edit
				image1='/assets/images/features/about/Smart-Solutions-Global-Impact.jpg.jpg'
				experienceNum='15+'
				experienceTitle='Year Of Experience'
				subTitle='Smart Solutions'
				title='<span>Global Impact</span>'
				content={`At ${process.env.NEXT_PUBLIC_SITE_NAME}, we also design, implement, and evaluate high-performance software solutions tailored for startups, SaaS providers, and business sites. We pride ourselves on delivering innovative, reliable, and efficient solutions that meet the unique needs of our clients.
                    <span className='space16' style="display: inline-block"></span>
                    Our commitment to excellence has earned us the trust of over 130 satisfied customers across 20+ countries, with more than 150 successfully delivered projects.`}
				// featurelist={[
				// 	"Highlight the unique features or benefits",
				// 	"Provide a brief overview of each solution",
				// 	"Present your main solutions/services.",
				// ]}
				// btnname='Learn More'
				// btnurl='/about'
			></About5Edit>
			{/* Home 01 */}
			<div
				style={{
					position: "relative",
					top: "80px",
				}}>
				<Award1Edit></Award1Edit>
			</div>
			{/* Home 01 */}
			<Testimonial1Edit></Testimonial1Edit>
			{/* About Light */}
			<Mission1Edit></Mission1Edit>
			{/* Home 03 */}
			<Services3Edit></Services3Edit>
			{/* Home 03 */}
			<About3Edit></About3Edit>

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

export default page;
