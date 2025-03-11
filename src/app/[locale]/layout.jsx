import { Figtree } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
// import "../assets/main.css";
// import "../assets/main.rtl.css";
import "../../../public/assets/style/style.css";
import { pageDirection } from "@/shared/utils/page-direction";
import Providers from "@/shared/providers";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import React from "react";

const figtree = Figtree({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	variable: "--body-color-font",
});

export const metadata = {
	title: {
		absolute: "",
		default: `${process.env.NEXT_PUBLIC_SITE_NAME} - Description`,
		template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME} - Description`,
	},
	description: `${process.env.NEXT_PUBLIC_SITE_NAME} - Description`,
	openGraph: {
		title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Description`,
		description: `${process.env.NEXT_PUBLIC_SITE_NAME} - Description`,
	},
};

export default async function RootLayout({ children, params: { locale } }) {
	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale)) {
		notFound();
	}
  // Get correct css file dependence on page direction
  const cssFile = pageDirection(locale) === "rtl" ? "/assets/style/main.rtl.css" : "/assets/style/main.css";

  return (
		<html dir={pageDirection(locale)} lang={locale}>
			<head>
				<meta name='author' content='' />
				<link rel='icon' href='/favicon.ico' sizes='any' />
        <link
					href={cssFile}
					rel='stylesheet'
					key='main-css'
				/>
			</head>
			<body className={`${figtree.variable}`}>

				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
