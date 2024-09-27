import Link from 'next/link';
import React from 'react';
import CategorySelector from './CategorySelector';
import SidebarHeader from './SidebarHeader';
import { getServerSession } from 'next-auth';
import options from '../api/auth/[...nextauth]/options';
import { getUserId } from '../actions/getUserId';

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
					<div className="flex flex-col items-center justify-center mt-20 gap-5 ">

						{/* ADD PRODUCT BUTTON */}
						<Link href={'/add-product'}>
							<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-base-100 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-200">
								<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-base-200 text-secondary rounded-md group-hover:bg-opacity-0 hover:text-white">
									Adicionar Produto
								</span>
							</button>
						</Link>

						{/* FIND PRODUCT BUTTON */}
						<Link href={'/find-product'}>
							<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-primary rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-secondary  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
								<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-base-200 text-secondary rounded-md group-hover:bg-opacity-0 hover:text-white">
									Buscar Produto Por Código
								</span>
							</button>
						</Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Sidebar;
