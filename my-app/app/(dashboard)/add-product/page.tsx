'use client';

import React from 'react';
import Link from 'next/link';
import AddProduct from '@/app/actions/addProduct';

const AddProductPage = () => {
	const testProduct = {
		productName: 'Outdoor Banner',
		productDescription: 'High-quality weather-resistant outdoor banner.',
		productImages: ['image1.jpg', 'image2.jpg'],
		category: 'banner',
	};

	const handleClick = async () => {
		const res = await AddProduct(testProduct);
		console.log(res);
	};

	return (
		<div>
			<Link className="text-warning" href="/api/auth/signout?callbackUrl=/&redirect=false">
				get out
			</Link>
			<button
				type="button"
				className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
			focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				onClick={handleClick}
			>
				Create Product
			</button>
		</div>
	);
};

export default AddProductPage;
