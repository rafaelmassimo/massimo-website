'use client';

import React from 'react';
import { SiOpenaigym } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SidebarHeader = () => {
	const session = useSession();
	return (
		<div className="flex items-center mb-4 gap-4 px-4">
			<Link href={'/'}>
				<SiOpenaigym className="w-10 h-10 text-primary" />
			</Link>
			<h2 className="text-xl font-extrabold text-primary mr-auto">Massimo & Massimo</h2>
			<ThemeToggle />
		</div>
	);
};

export default SidebarHeader;
