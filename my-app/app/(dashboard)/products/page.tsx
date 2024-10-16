'use client';

import React, { useEffect, useState } from 'react';
import { productType } from '@/models/product.model';
import { useSession } from 'next-auth/react';

import ProductCard from '@/app/components/ProductCard';
import { getAllProducts } from '@/app/actions/getAllProducts';
import { Session } from 'inspector/promises';
import BallTriangleLoader from '@/app/components/BallTriangleLoader';

const ProductsPage = () => {
	const { data: session } = useSession();

	const [products, setProducts] = useState<productType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getProducts = async () => {
			const allProduct = await getAllProducts();
			setProducts(allProduct);
			setLoading(false);
		};
		getProducts();
	}, []);
	return (
		<section className="px-4 py-6 bg-base-200">
			<div className="container-xl lg:container m-auto">
				{loading ? (
					<div className="flex justify-center items-center h-96">
						<BallTriangleLoader />
					</div>
				) : (
					<>
						{products.length === 0 ? (
							<h2 className="text-3xl font-bold text-primary mb-6 text-center">
								Nenhum Produto Disponível
							</h2>
						) : (
							<>
								<h2 className="text-3xl font-bold text-primary mb-6 text-center">
									Todos os Produtos:
								</h2>
								<div className="lg:grid items-center grid-cols-2 gap-6">
									{products.map((product, index) => (
										<div key={index} className="w-full my-5">
											<ProductCard product={product} session={session as unknown as Session} />
										</div>
									))}
								</div>
							</>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default ProductsPage;
