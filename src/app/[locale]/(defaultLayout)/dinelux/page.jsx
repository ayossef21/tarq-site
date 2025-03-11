import HowWork3Edit from "@/features/dinelux/Components/HowWork3Edit";
import HowWork4Edit from "@/features/dinelux/Components/HowWork4Edit";
import Mission1Edit from "@/features/dinelux/Components/Mission1Edit";
import Services5Edit from "@/features/dinelux/Components/Services5Edit";
import Testimonial1Edit from "@/features/dinelux/Components/Testimonial1Edit";
import Cta1Edit from "@/shared/Components/Cta/Cta1Edit";
import React from "react";

function DineLux() {
	return (
		<div>
			{/* About Light: DineLux */}
			<Mission1Edit></Mission1Edit>
			{/* About Light: Why DineLux */}
			<Testimonial1Edit></Testimonial1Edit>
			{/* Home 04: DineLux Key Features */}
			<HowWork3Edit></HowWork3Edit>
			{/* Home 05: DineLux Benefits */}
			<HowWork4Edit></HowWork4Edit>
			{/* Home 05: Additional Features and Services */}
			<Services5Edit></Services5Edit>
			{/* Home page: DineLux - Elevating Dining Experiences */}
			<Cta1Edit
				title={`DineLux <br /> Elevating Dining Experiences`}
				content={`Designed for efficiency and excellence, DineLux simplifies reservations, optimizes table management, and enhances guest satisfaction. With seamless integration, real-time updates, and intelligent automation, we help restaurants operate smarter and deliver exceptional service.
                    <br /> <strong style="fontSize: 26px">
                    Let's revolutionize your restaurant together.
                    </strong>
                    `}
                    linkText={"Request a Meeting"}
                    linkHref={"/service"}
                    ></Cta1Edit>
		</div>
	);
}

export default DineLux;
