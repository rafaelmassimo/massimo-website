'use client';

import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { RiCloseLargeLine } from 'react-icons/ri';

const ToggleButton = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="drawer lg:drawer-open">
			<input
				type="checkbox"
				id="my-drawer-2"
				className="drawer-toggle"
				checked={isOpen}
				onChange={handleOpen}
			/>
			<div className="drawer-content">
				<label htmlFor="my-drawer-2" className="drawer-button lg:hidden fixed top-6 right-6">
					{isOpen ? (
						<RiCloseLargeLine className="w-8 h-8 text-primary" />
					) : (
						<FaBarsStaggered className="w-8 h-8 text-primary" />
					)}
				</label>
				<div className="bg-base-200 px-8 py-8 min-h-screen">{children}</div>
			</div>
			<div className="drawer-side">
				{/* Overlay covers the screen when the sidebar is open */}
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<Sidebar />
			</div>
		</div>
	);
};

export default ToggleButton;
