'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { getAllCategories } from '../actions/getAllCategories';
import { Session } from 'inspector/promises';

const CategorySelector = ({ session }: { session?: Session }) => {
	const [categories, setCategories] = useState<string[]>();

	const handleClick = async () => {
		const newCategories = await getAllCategories();
		setCategories(newCategories!);
	};

	return (
		<>
			<div className="collapse bg-slate-400">
				<input type="checkbox" onClick={handleClick} />
				<div className="btn collapse-title text-xl font-medium pr-2 text-gray-900">
					Categorias
				</div>
				<div className="collapse-content">
					<div className={`${ session ? 'max-h-60 overflow-y-scroll' : null }`} >
						<ul className="menu min-h-full w-auto p-4 items-center ">
								<li>
									<Link
										href={`/products`}
										className="w-56 flex flex-row items-center justify-center font-medium text-center bg-slate-50 rounded-xl mb-2 text-lg text-slate-700 hover:bg-slate-600 hover:text-white"
									>
										Todos Os Produtos
									</Link>
								</li>
							{categories?.map((category: string) => {
								return (
									<div>
										<li key={category}>
											<Link
												href={`/products/${category}`}
												className="flex justify-center  w-56 text-center text-lg text-black bg-slate-50 rounded-xl my-1 hover:bg-slate-600 hover:text-white"
											>
												{category}
											</Link>
										</li>
									</div>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default CategorySelector;
