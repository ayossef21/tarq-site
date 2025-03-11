import React from "react";
import Header1Edit from "@/shared/Components/Header/Header1Edit";
import Footer1Edit from "@/shared/Components/Footer/Footer1Edit";

const DefaultLayout = ({ children }) => {
	return (
		<div className='main-page-area'>
			<Header1Edit></Header1Edit>
			{children}
			<Footer1Edit></Footer1Edit>
		</div>
	);
};

export default DefaultLayout;
