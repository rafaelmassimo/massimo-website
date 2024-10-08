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
				<Image src={logo} alt="logo" height={90} width={90} />

				<p>
					Soluções Gráficas Ltd.
					<br />
					Oferecendo serviços de qualidade desde 1992
				</p>
			</aside>
			<nav>
				<h6 className="footer-title">Services</h6>
				<a className="link link-hover">Branding</a>
				<a className="link link-hover">Design</a>
				<a className="link link-hover">Marketing</a>
				<a className="link link-hover">Advertisement</a>
			</nav>
			<nav>
				<h6 className="footer-title">Company</h6>
				<a className="link link-hover">About us</a>
				<a className="link link-hover">Contact</a>
				<a className="link link-hover">Jobs</a>
				<a className="link link-hover">Press kit</a>
			</nav>
			<nav>
				<h6 className="footer-title">Legal</h6>
				<a className="link link-hover">Terms of use</a>
				<a className="link link-hover">Privacy policy</a>
				<a className="link link-hover">Cookie policy</a>
			</nav>
			
		</footer>
		<div className="flex justify-end items-center absolute  right-2 z-10">
				<Link href="/api/auth/signin">
					<FaRegCopyright className="h-5 w-5 text-blue-400" />
				</Link>
			</div>
		</>
	);
};

export default Footer;
