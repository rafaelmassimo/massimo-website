import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
	return (
		<div className="px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
			<ul className="menu text-base-content min-h-full w-auto p-4">
				{/* Sidebar content here */}
				<li className="mr-4">
					<a>Sidebar Item 1</a>
				</li>
				<li className="mr-4">
					<Link href={'/'}>Sidebar Item 2</Link>
				</li>
				<li className="mr-4">
					<a>Sidebar Item 3</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
