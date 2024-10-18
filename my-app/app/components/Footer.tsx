import Image from 'next/image';
import React from 'react';
import logo from '@/app/assets/images/m_m.png';
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link';

const Footer = async () => {
	return (
		<>
		<footer className="footer bg-base-100 text-base-content p-10 relative">
			<aside>
				<Image src={logo} alt="logo" height={90} width={90} style={{ width: 'auto', height: 'auto' }}/>

				<p>
					M&M Soluções Gráficas Ltda.
					<br />
					Oferecendo serviços de qualidade desde 1992
				</p>
			</aside>
			
			
		</footer>
		<div className="flex justify-end items-center relative m-[-20px] bottom-0 right-5 z-10">
				<Link href="/api/auth/signin">
					<FaRegCopyright className="h-5 w-5 text-blue-400" />
				</Link>
			</div>
		</>
	);
};

export default Footer;
