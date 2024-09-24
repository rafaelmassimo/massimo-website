'use client';

// export const dynamic = 'force-dynamic';

import React, { useEffect, useState } from 'react';

import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getOneProductById } from '../actions/getOneProduct';
import { updateProduct } from '../actions/updateProduct';
import { images } from '../assets/images/images';
import DNALoarder from './DNALoarder';
import { productType } from '@/models/product.model';
import { EditProductType } from '@/utils/types';
import Link from 'next/link';

const EditProductForm = () => {
	const route = useRouter();
	const { id } = useParams();
	const [loading, setLoading] = useState<boolean>(false);
	const [newProduct, setNewProduct] = useState<any>({
		owner: '',
		productId: '',
		productName: '',
		productDescription: '',
		category: '',
		productImages: [''],
	});

	useEffect(() => {
		const fetchProduct = async () => {
			const product = await getOneProductById(id as string);
			console.log('this is product', product);

			if (product) {
				setNewProduct({...product, productId: product._id});
				console.log(product);
			}
		};

		fetchProduct();
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		//* CREATE NEW OBJECT WITH THE DATA FROM FORM
		const updatedProduct = {
			productName: data.get('productName') as string,
			productDescription: data.get('productDescription') as string,
			category: data.get('category') as string,
		};

		setLoading(true);
		try {
			//* CALL THE UPDATE PRODUCT ACTION
			const res = await updateProduct(
				newProduct.productId as string,
				newProduct.owner as string,
				updatedProduct,
			);
			if (res?.success) {
				toast.success(res?.success);
				route.push('/products');
			}
		} catch (error) {
			console.error('Error adding product:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col justify-center items-center mb-4 gap-2">
					{/* PRODUCT NAME */}
					<label htmlFor="productName">
						<p className="text-primary text-xl">Nome Produto</p>
					</label>
					<input
						type="text"
						id="productName"
						name="productName"
						className="border rounded-lg w-full py-2 px-3 mb-2 text-secondary"
						placeholder="Insira o Nome do Produto"
						value={newProduct.productName}
						required
						onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
					/>
					{/* PRODUCT DESCRIPTION */}
					<label htmlFor="productDescription">
						<p className="text-primary text-xl">Descrição Produto</p>
					</label>

					<textarea
						id="productDescription"
						name="productDescription"
						className="border rounded-lg w-full py-2 px-3 mb-2 h-32 overflow-y-scroll text-secondary"
						placeholder="Insira a Descrição do Produto"
						value={newProduct.productDescription}
						onChange={(e) => setNewProduct({ ...newProduct, productDescription: e.target.value })}
					/>

					{/* CATEGORY */}
					<label htmlFor="category">
						<p className="text-primary text-xl text-center">Categoria</p>
						<p className=" text-md italic text-accent">
							( Tenta usar corretamente as categorias sem criar várias desnecessárias )
						</p>
					</label>
					<input
						type="text"
						id="category"
						name="category"
						className="border rounded-lg w-full py-2 px-3 mb-2 text-secondary"
						placeholder="Insira a Categoria desse Produto"
						required
						value={newProduct.category}
						onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
					/>

					{/* PRODUCT IMAGES */}
					<p className="text-primary text-xl text-center">Imagens do Produto</p>
					<p className=" text-md italic text-accent">( Agora adicione as fotos do novo produto )</p>
					

					{newProduct.productImages.length > 0 && (
						<div className="flex flex-col justify-center items-center p-4 bg-base-200 rounded-lg">
							<h3 className="text-secondary mb-4 text-left">Imagens:</h3>

							{newProduct.productImages.map((image: any, index: number) => (
								<div className="badge badge-secondary text-base-100 my-1" key={index}>
									<Link href={image} target="_blank" rel="noopener noreferrer">
										{`Imagem ${index + 1}`}
									</Link>
								</div>
							))}
						</div>
					)}

					{/* SUBMIT SECTION */}
					<div className="mt-10">
						{loading ? (
							<DNALoarder />
						) : (
							<>
								<button
									className="bg-blue-400 text-white hover:bg-blue-600 font-bold py-2 px-4 shadow-xl rounded-full w-full focus:outline-none mt-3 transition duration-100 focus:translate-y-1 focus:shadow-none"
									type="submit"
									disabled={loading}
								>
									Atualizar o Produto
								</button>

								<button
									className="bg-gray-400 text-white hover:bg-gray-600 font-bold py-2 px-4 shadow-xl rounded-full w-full focus:outline-none mt-3 transition duration-100 focus:translate-y-1 focus:shadow-none"
									onClick={() => route.push('/products')}
								>
									Cancel
								</button>
							</>
						)}
					</div>
				</div>
			</form>
		</>
	);
};

export default EditProductForm;
