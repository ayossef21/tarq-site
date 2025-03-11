import React from "react";
import Footer3 from "@/app/draft/Components/Footer/Footer3";
import HeaderStyle3 from "@/app/draft/Components/Header/HeaderStyle3";

const layout = ({ children }) => {
	return (
		<div className='main-page-area3'>
			<HeaderStyle3></HeaderStyle3>
			{children}
			<Footer3></Footer3>
		</div>
	);
};

export default layout;
