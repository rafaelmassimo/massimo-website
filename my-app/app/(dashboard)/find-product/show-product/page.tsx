'use client';

import filterProductByCategory from '@/app/actions/filterProductByCategory';
import { findProductByCode } from '@/app/actions/findProductByCode';
import BallTriangleLoader from '@/app/components/BallTriangleLoader';
import ProductCard from '@/app/components/ProductCard';
import SearchedProductByCode from '@/app/components/SearchedProductByCode';
import { productType } from '@/models/product.model';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

const ShowProductPage = () => {
	const searchParams = useSearchParams();

	const { id: category } = useParams();
	const [product, setProduct] = useState<productType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getProducts = async () => {
			const productByCode = await findProductByCode(searchParams.get('productCode')?.toString() as string);
			setProduct(productByCode);
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
					<Link href="/find-product" className="flex flex-row  text-blue-500 mt-2">
						<span className=" flex justify-center bg-base-300 text-indigo-800 text-s me-2 px-2.5 py-0.5 rounded ">
							<IoIosArrowRoundBack className="w-6 h-6" />
							Voltar para Buscar Produtos
						</span>
					</Link>
					<h2 className="text-3xl font-bold text-primary mb-6 text-center">Produto Buscado:</h2>
					<div className="flex items-center justify-center">
						
							<div className="w-fit">
								<ProductCard product={product as any}  />
							</div>
					
					</div>
				</>

				)}
			</div>
		</section>
	)
};

export default ShowProductPage;
