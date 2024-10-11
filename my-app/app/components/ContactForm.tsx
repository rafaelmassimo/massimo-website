'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { sendEmail } from '../actions/sendEmail';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import DNALoader from './DNALoarder';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);

		try {
			const res = await sendEmail(formData);
			if (res && res.status === 200) {
				toast.success('Mensagem enviada com sucesso!');
				setLoading(false);
				router.push('/success');
			}

			(e.target as HTMLFormElement).reset(); // Reset the form after submission
		} catch (error) {
			toast.error('Erro ao enviar a mensagem. Tente novamente.');
			setLoading(false);
		}
	};

	return (
		<div>
			<div className='flex justify-center mb-4'>
				<h1 className="mb-4 text-3xl font-extrabold text-gray-700 dark:text-white md:text-5xl lg:text-6xl">
					Fale{' '}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600  to-green-300 ">
						Conosco
					</span>{' '}
				</h1>
			</div>

			<form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
				<div className="flex flex-col justify-center items-center mb-4 w-10/12 gap-5">
					<label htmlFor="nameClient">
						<p className="text-gray-800 text-xl">Nome Completo</p>
					</label>
					<input
						type="text"
						placeholder="Insira Aqui o Seu Nome Completo"
						name="nameClient"
						className="input input-bordered text-primary input-primary w-full max-w-xs"
					/>

					<label htmlFor="emailClient">
						<p className="text-gray-800 text-xl">Seu E-mail</p>
					</label>
					<input
						type="text"
						placeholder="Insira Aqui o Seu E-mail"
						name="emailClient"
						className="input input-bordered text-primary input-primary w-full max-w-xs"
					/>

					<label htmlFor="numberClient">
						<p className="text-gray-800 text-xl">Telefone com DDD</p>
					</label>
					<input
						type="text"
						placeholder="Exemplo: 41 99999 - 9999"
						name="numberClient"
						className="input input-bordered text-primary input-primary w-full max-w-xs"
					/>

					<label htmlFor="productCode">
						<p className="text-gray-800 text-xl">Código do Produto</p>
					</label>
					<input
						type="text"
						placeholder="Exemplo: Bane46066"
						name="productCode"
						className="input input-bordered text-primary input-primary w-full max-w-xs"
					/>

					<label htmlFor="message">
						<p className="text-gray-800 text-xl">Sua Mensagem</p>
					</label>

					<textarea
						id="message"
						name="message"
						className="border rounded-lg w-full py-2 px-3 mb-2 h-32 overflow-y-scroll text-primary border-primary focus:outline outline-2 focus:outline-primary focus:outline-offset-2 "
						placeholder="Insira Aqui a Sua Mensagem"
					/>
				</div>

				{loading ? (
					<DNALoader height={70} width={70} />
				) : (
					<Button type="submit" variant="default" className="bg-lime-600">
						Enviar Mensagem
					</Button>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
