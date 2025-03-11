import { Link } from "@/i18n/routing";
import { scrollToElement } from "@/shared/utils/scrollToElement";
import React from "react";

export default function NavEdit({ setMobileToggle }) {
	return (
		<ul className='cs_nav_list fw-medium'>
			<li className='menu-item-has-children home'>
				<Link href='/'>Home</Link>
			</li>
			<li className='menu-item-has-children home'>
				<Link href='/about'>About Us</Link>
			</li>

			<li className='menu-item-has-children home'>
				<a onClick={() => setMobileToggle(false)}
                style={{
                    // pointerEvents: "none",
                    cursor: "not-allowed"
                }}
                >
					Our team
				</a>
			</li>

			<li className='menu-item-has-children home'>
				<a style={{
                    // pointerEvents: "none",
                    cursor: "not-allowed"
                }}>Services</a>
			</li>
			<li className='menu-item-has-children home'>
				<Link href='/clients' onClick={() => setMobileToggle(false)}>
					Clients
				</Link>
			</li>
			<li className='menu-item-has-children home'>
				<Link
                href="#"
					style={{ cursor: "pointer" }}
					onClick={() => {
						scrollToElement("contact-us");
						setMobileToggle(false);
					}}>
					Contact us
				</Link>
			</li>
			{/* <li className="menu-item-has-children home">
                <Link href="/contact-us" onClick={() => setMobileToggle(false)}>
                    Contact us
                </Link>
            </li> */}
			{/* <li className="menu-item-has-children home">
                <Link href="/blog" onClick={() => setMobileToggle(false)}>
                    Blog
                </Link>
            </li> */}
		</ul>
	);
}
