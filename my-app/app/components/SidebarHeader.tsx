

import React from 'react';
import Image from 'next/image';
// import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import m_m from '../assets/images/m_m.png';

const SidebarHeader = () => {

	return (
		<div className="flex items-center mb-4 gap-4 px-4">
			<Link href={'/products'}>
				<div className="bg-sky-50 rounded-2xl shadow-lg">
					<Image src={m_m} className="w-full h-auto" alt="logo" priority width={250} height={250} style={{ width: 'auto', height: 'auto' }} />
				</div>
			</Link>
		</div>
	);
};

export default SidebarHeader;
