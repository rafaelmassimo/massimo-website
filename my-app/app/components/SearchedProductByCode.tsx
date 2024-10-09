import React, { useEffect, useState } from 'react';

import { productType } from '@/models/product.model';
import DNALoader from './DNALoarder';
import { findProductByCode } from '../actions/findProductByCode';

const SearchedProductByCode = ({ code }: { code: string }) => {
	const [product, setProduct] = useState<productType>();

	useEffect(() => {
		const getProduct = async () => {
			const filteredProduct = await findProductByCode(code);
			setProduct(filteredProduct);
		};
		getProduct();
	}, [code]);

	

	return (
		<section className="px-4 py-6 bg-slate-200 min-h-screen">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-primary mb-6 text-center">
					{product ? product.productName : <DNALoader />}
				</h2>
			</div>

			{product && (
				<div>
					<div className="flex flex-col lg:flex-row bg-base-100 rounded-lg shadow-lg p-4 mb-4">
						<img
							src={product.productImages?.[0]}
							alt={product.productName}
							className="w-48 h-48 object-cover rounded-lg"
						/>
						<div className="flex flex-col justify-between ml-4">
							<h3 className="text-xl font-semibold text-blue-500">{product.productName}</h3>
							<p className="text-lg text-gray-500">{product.productDescription}</p>
							<p className="text-lg font-semibold text-blue-500">{product.category}</p>
							<p className="text-lg font-semibold text-blue-500">Codigo: {product.productCode}</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default SearchedProductByCode;
