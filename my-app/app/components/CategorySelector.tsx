'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { getAllCategories } from '../actions/getAllCategories';

const CategorySelector = () => {
	const [categories, setCategories] = useState<string[]>();

	const handleClick = async () => {
		const newCategories = await getAllCategories();
		setCategories(newCategories!);
	};

	return (
		<>
			<div className="collapse bg-base-200">
				<input type="checkbox" 
				onClick={handleClick}/>
				<div
					className="btn collapse-title text-xl font-medium text-center text-secondary">
					Categorias
				</div>
				<div className="collapse-content">
					<ul className="menu  min-h-full w-auto p-4 items-center text-accent">
						{categories?.map((category: string) => {
							return (
								<li className="mr-4 text-lg" key={category}>
									<Link href={`/products/${category}`}>{category}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default CategorySelector;
