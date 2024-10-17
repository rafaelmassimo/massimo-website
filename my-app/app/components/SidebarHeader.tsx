'use client';

import React from 'react';
import Image from 'next/image';
// import ThemeToggle from './ThemeToggle';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import m_m from '../assets/images/m_m.png';

const SidebarHeader = () => {
	const session = useSession();

	return (
		<div className="flex items-center mb-4 gap-4 px-4">
			<Link href={'/products'}>
				<div className="bg-sky-50 rounded-2xl shadow-lg">
					<Image src={m_m} alt="logo" className="w-[200px] h-auto mr-3 " priority width={0} height={0} sizes='100%'/>
				</div>
			</Link>

			
		</div>
	);
};

export default SidebarHeader;
