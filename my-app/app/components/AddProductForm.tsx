'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SubmitButton from './SubmitButton';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const AddProductForm = () => {
	const route = useRouter();
	const [images, setImages] = useState<any>([]);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('tricked');
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
	return (
		<>
			<form>
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
						htmlFor="fileInput"
						className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
					>
						Adicione as Imagens do Produto
					</label>
					<input
						id="fileInput"
						type="file"
						className="hidden" // This hides the default file input
						onChange={(e) => handleImageChange(e)} // Trigger your file handling logic here
					/>
					{images.length > 0 && (
						<div className="flex flex-col justify-center items-center p-4 bg-base-200 rounded-lg">
							<h3 className="text-secondary mb-4 text-left">Images:</h3>

							{images.map((image: any, index: number) => (
								<>
									<div className="badge badge-secondary text-base-100" key={index}>
										{image.name}
									</div>
								</>
							))}
						</div>
					)}

					<div className="mt-10">
						<SubmitButton />

						<button
							className="bg-gray-400 text-white hover:bg-gray-600 font-bold py-2 px-4 shadow-xl rounded-full w-full focus:outline-none mt-3 transition duration-100 focus:translate-y-1 focus:shadow-none"
							onClick={() => route.push('/products')}
						>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default AddProductForm;
