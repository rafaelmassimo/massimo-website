import Link from 'next/link';
import React from 'react';

const CategorySelector = () => {
	return (
		<>
			<div className="collapse bg-base-200">
				<input type="checkbox" />
				<div className="btn collapse-title text-xl font-medium text-center text-secondary">Categorias</div>
				<div className="collapse-content">
					<ul className="menu  min-h-full w-auto p-4 items-center text-accent">
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
			</div>
		</>
	);
};

export default CategorySelector;
