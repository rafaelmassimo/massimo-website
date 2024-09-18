import Link from 'next/link';
import React from 'react';
import CategorySelector from './CategorySelector';
import SidebarHeader from './SidebarHeader';
import { getServerSession } from 'next-auth';
import options from '../api/auth/[...nextauth]/options';

const Sidebar = async () => {
	const session = await getServerSession(options);

	return (
		<>
			<div className="px-4 w-fit min-h-full bg-base-300 py-12 flex flex-col">
				<SidebarHeader />
				<div>
					<CategorySelector />
				</div>

				{session && (
					<div className="flex items-center justify-center mt-20 ">
						<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Adicionar Produto</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Sidebar;
