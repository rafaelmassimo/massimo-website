'use client';

import React from 'react';
import Link from 'next/link';
import AddProductForm from '@/app/components/AddProductForm';

const AddProductPage = () => {
	return (
		<section className="h-full bg-base-100">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-lg border m-4 md:m-0">
					<AddProductForm />
				</div>
			</div>
		</section>
	);
};

export default AddProductPage;
