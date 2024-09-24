'use client';

export const dynamic = 'force-dynamic';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from '@/app/actions/addProduct';
import DNALoader from './DNALoarder';
import SubmitButton from './SubmitButton';

const AddProductForm = () => {
	const route = useRouter();
	const [images, setImages] = useState<File[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (files) {
			const newFilesFormat = Array.from(files);
			const totalImages = images.length + newFilesFormat.length;

			if (totalImages > 5) {
				e.target.value = ''; // Clear the input
				toast.error('Você só pode enviar até 5 imagens');
				return;
			}

			const updatedImages = [...images, ...newFilesFormat];

			// Update the state
			setImages(updatedImages);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		//*PREPARE THE IMAGES FOR UPLOAD
		const imagesPayloads: any[] = [];

		for (const imageFile of images) {
			const imageBuffer = await imageFile.arrayBuffer();
			const imageArray = Array.from(new Uint8Array(imageBuffer));
			const imageData = Buffer.from(imageArray);

			// Convert the image data to base64
			const imageBase64 = imageData.toString('base64');

			const imagePayLoad = {
				image: `data:${imageFile.type};base64,${imageBase64}`,
			};

			imagesPayloads.push(imagePayLoad);
		}

		//* CREATE NEW OBJECT WITH THE DATA FROM FORM
		const userData = {
			productName: data.get('productName') as string,
			productDescription: data.get('productDescription') as string,
			category: data.get('category') as string,
			productImages: imagesPayloads,
		};

		setLoading(true);
		try {
			//* CALL THE ADD PRODUCT ACTION
			const res = await addProduct(userData);
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
						required
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
					/>

					{/* PRODUCT IMAGES */}
					<p className="text-primary text-xl text-center">Imagens do Produto</p>
					<p className=" text-md italic text-accent">( Agora adicione as fotos do novo produto )</p>
					<label
						htmlFor="productImages"
						className={` ${
							images.length === 5
								? 'bg-gray-200 text-primary cursor-not-allowed'
								: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer'
						} font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `}
					>
						{images.length === 5
							? 'Você já adicionou as 5 images'
							: 'Adicione as Imagens do Produto'}
					</label>
					<input
						name="productImages"
						id="productImages"
						type="file"
						className="hidden" // This hides the default file input
						onChange={(e) => handleImageChange(e)} // Trigger your file handling logic here
						multiple
						disabled={images.length === 5}
					/>
					{images.length > 0 && (
						<div className="flex flex-col justify-center items-center p-4 bg-base-200 rounded-lg">
							<h3 className="text-secondary mb-4 text-left">Imagens:</h3>

							{images.map((image: any, index: number) => (
								<div className="badge badge-secondary text-base-100 my-1" key={index}>
									{image.name}
								</div>
							))}
						</div>
					)}

					{/* SUBMIT SECTION */}
					<div className="mt-10">
						{loading ? (
							<DNALoader />
						) : (
							<>
								<SubmitButton />

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

export default AddProductForm;
