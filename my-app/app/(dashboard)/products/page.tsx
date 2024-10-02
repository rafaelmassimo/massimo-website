import ProductCard from '@/app/components/ProductCard';
import React, { Suspense } from 'react';

const ProductsPage = () => {
	return (
		<Suspense>
			<ProductCard />
		</Suspense>
	);
};

export default ProductsPage;
