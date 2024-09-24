import { getOneProductById } from '@/app/actions/getOneProduct';
import EditProductForm from '@/app/components/EditProductForm';

import React from 'react';

const UpdateProductPage = async () => {
	
	
	return (
		<section className="h-full bg-base-100">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-lg border m-4 md:m-0">
					<EditProductForm />
				</div>
			</div>
		</section>
	);
};

export default UpdateProductPage;
