'use client';

import React, { FormEvent, useState } from 'react';

import DNALoader from './DNALoarder';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

const FindProductForm = () => {
	const route = useRouter();

	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		const data = new FormData(e.currentTarget);
		const productCode = data.get('productCode') as string;

		if (productCode === '') {
			toast.error('Precisa inserir o código do produto para buscar');

			setLoading(false);

			return;
		} else {
			const query = `?productCode=${productCode}`;
			route.push(`/find-product/show-product${query}`);
		}
	};

	return (
		<div className='flex flex-col justify-start items-center'>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col items-center justify-center ">
					<div className="flex flex-col justify-center items-center gap-2">
						{/* PRODUCT CODE */}
						<label htmlFor="productCode">
							<p className="text-primary text-xl">Adicione aqui o código do produto para buscar</p>
						</label>
						<input
							type="text"
							id="productCode"
							name="productCode"
							className="border rounded-lg w-full py-2 px-3 mb-2 text-secondary"
							placeholder="Insira o Código do Produto"
						/>
					</div>

					{/* SUBMIT SECTION */}
					<div className="mt-4 w-fit">
						{loading ? (
							<DNALoader />
						) : (
							<>
								<button
									className="bg-blue-400 text-white hover:bg-blue-600 font-bold py-2 px-4 shadow-xl rounded-full w-full focus:outline-none mt-3 transition duration-100 focus:translate-y-1 focus:shadow-none"
									type="submit"
									disabled={loading}
								>
									Buscar o Produto
								</button>
							</>
						)}
					</div>
				</div>
			</form>
			<div className='w-fit'>
				<button
					className="bg-gray-400 text-white hover:bg-gray-600 font-bold py-2 px-4 shadow-xl rounded-full w-full focus:outline-none mt-3 transition duration-100 focus:translate-y-1 focus:shadow-none"
					onClick={() => route.push('/products')}
				>
					Cancel
				</button>
			</div>
			<ToastContainer />
		</div>
	);
};

export default FindProductForm;
