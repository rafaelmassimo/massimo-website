'use client';

import filterProductByCategory from '@/app/actions/filterProductByCategory';
import BallTriangleLoader from '@/app/components/BallTriangleLoader';
import ProductCard from '@/app/components/ProductCard';
import { productType } from '@/models/product.model';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

const SearchResult = () => {
	const { id: category } = useParams();
	const [products, setProducts] = useState<productType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getProducts = async () => {
			const allProduct = await filterProductByCategory(category as string);
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
						<Link href="/products" className="flex flex-row  text-blue-500 mt-2">
							<span className=" flex justify-center bg-base-300 text-indigo-800 text-s me-2 px-2.5 py-0.5 rounded ">
								<IoIosArrowRoundBack className="w-6 h-6" />
								Voltar para a Página de Produtos
							</span>
						</Link>
						<h2 className="text-3xl font-bold text-secondary mb-6 text-center ">{category}</h2>
						<div className="grid items-center grid-cols-2 gap-36">
							{products.map((product, index) => (
								<div key={index} className="w-full">
									<ProductCard product={product} />
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default SearchResult;
