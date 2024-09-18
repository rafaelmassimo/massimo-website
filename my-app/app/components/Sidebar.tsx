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
						<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-base-100 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-200">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-base-200 text-secondary rounded-md group-hover:bg-opacity-0">
								Adicionar Produto
							</span>
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Sidebar;
