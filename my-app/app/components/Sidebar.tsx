import Link from 'next/link';
import React from 'react';
import CategorySelector from './CategorySelector';
import SidebarHeader from './SidebarHeader';
import { getServerSession } from 'next-auth';
import options from '../api/auth/[...nextauth]/options';
import { getUserId } from '../actions/getUserId';
import { AiFillMessage } from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";
import { Session } from 'inspector/promises';


const Sidebar = async () => {
	const session = await getServerSession(options);

	return (
		<div className="px-4 w-fit min-h-full bg-slate-200 py-12 grid grid-rows-[auto_1fr_auto] gap-4">
			{/* Sidebar Header at the top */}
			<SidebarHeader />

			{/* Category Selector in the middle */}
			<div>
				<CategorySelector session={session as unknown as Session} />
			</div>

			{/* Buttons (Add Product, Find Product) */}
			{session && (
				<div className="flex flex-col items-center justify-center gap-5 p-4 rounded-xl bg-lime-200 border border-lime-400">
					<h2 className='text-secondary font-semibold font-'>Botões apenas para uso de Elisvaldo</h2>
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

					{/* SIGN OUT BUTTON */}
					<Link href="/api/auth/signout?callbackUrl=/products">
						<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-primary rounded-lg group bg-gradient-to-br from-orange-600 to-red-500 group-hover:from-orange-600 group-hover:to-red-500 hover:text-secondary  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-base-200 text-secondary rounded-md group-hover:bg-opacity-0 hover:text-white">
							<GiExitDoor className='h-5 w-5'  />
							</span>
						</button>
					</Link>
				</div>
			)}

			{/* Contact button at the bottom */}
			<div className="flex justify-center items-center mt-auto">
				<Link href={'/contact'}>
					<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-primary rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
					<AiFillMessage className='p-3 w-12 h-12 text-white hover:scale-110 transition-transform duration-300' />
						<span className="relative px-5 py-2.5 text-xl transition-all ease-in duration-75 bg-base-200 text-secondary rounded-md group-hover:bg-opacity-0 hover:text-white">
							Entrar em Contato
						</span>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
