import React, { useEffect, useState } from 'react';
import filterProduct from '../actions/filterProduct';
import { get } from 'http';
import { productType } from '@/models/product.model';

const SearchProduct = ({ category }: { category: string }) => {
	const [products, setProducts] = useState<productType[]>([]);

	useEffect(() => {
		const getProducts = async () => {
			const filteredProducts = await filterProduct(category);
            setProducts(filteredProducts);
		};
        getProducts();
	}, []);

	return (
		<section className="px-4 py-6 bg-base-200 min-h-screen">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-primary mb-6 text-center">{`${category
					.charAt(0)
					.toUpperCase()}${category.slice(1).toLocaleLowerCase()}`}</h2>
			</div>

            <div>
                {products.map((product: productType) => {
                    return (
                        <div key={product.id?.toString() || ''} className="flex flex-col lg:flex-row bg-base-100 rounded-lg shadow-lg p-4 mb-4">
                            <img src={product.productImages?.[0]} alt={product.productName} className="w-48 h-48 object-cover rounded-lg" />
                            <div className="flex flex-col justify-between ml-4">
                                <h3 className="text-xl font-semibold text-blue-500">{product.productName}</h3>
                                <p className="text-lg text-gray-500">{product.productDescription}</p>
                                <p className="text-lg font-semibold text-blue-500">{product.category}</p>
                                <p className="text-lg font-semibold text-blue-500">Codigo: {product.productCode}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
		</section>
	);
};

export default SearchProduct;
