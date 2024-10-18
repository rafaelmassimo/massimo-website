'use client';

import React from 'react';
import { productType } from '@/models/product.model';
import Link from 'next/link';
import { Session } from 'inspector/promises';
import Slider from './Slider';


const ProductCard = ({	product, session, }: { product: productType; session?: Session; }) => {

	return (
		<div key={product._id?.toString()}>
			<div className="flex flex-col justify-end rounded-xl shadow-md relative bg-base-100 min-h-[410px] lg:min-w-[440px] max-w-[700px] mt-2 transform transition-transform duration-300 hover:scale-[1.02]">
            <Slider images={product.productImages as string[]}/>
				<div className="p-4">
					<div className="text-left md:text-center lg:text-left mb-6 h-full">
					
							<div>
								<p className="text-gray-800">Nome Produto:</p>
								<span className="flex text-xl text-primary font-bold p-1 h-9 overflow-y-scroll no-scrollbar">
									{product.productName}
								</span>
							</div>

					</div>
					<p className="text-gray-800">Descrição:</p>
                    <div className="bg-base-200 rounded-md p-3 min-h-40 max-h-40 no-scrollbar overflow-y-auto cursor-ns-resize shadow-inner">

						<pre className="whitespace-pre-wrap text-left text-secondary">{product.productDescription}</pre>
					</div>

					<div className="flex flex-row items-start p-2 mb-4 ">
						<div className="text-gray-800">Categoria:</div>
						<p className="ml-2 text-secondary">{product.category}</p>
					</div>

					<div className="flex flex-row items-start mb-4 rounded-lg p-3 bg-slate-200 w-fit">
						<div className="text-gray-800 font-medium">Código:</div>
						<p className="ml-2 text-red-600 font-medium">{product.productCode}</p>
					</div>

					{session && (
						<Link
							href={`/add-product/${product._id?.toString()}`}
							className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
						>
							Editar Produto
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
