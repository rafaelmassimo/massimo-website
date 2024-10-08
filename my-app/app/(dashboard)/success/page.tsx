'use client';

import React from 'react';
import cachorroImage from '@/app/assets/images/cachorro.jpeg';
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
	const router = useRouter();
	return (
		<div
			className="hero min-h-screen "
			style={{
				backgroundImage: `url(${cachorroImage.src})`,
				borderRadius: '20px',
			}}
		>
			<div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Parabens!</h1>
					<div className="bg-black rounded-xl opacity-90">
						<p className="mb-5 text-xl z-100">
							Provalmente irei esquecer de te responder, mas obrigado por entrar em contato!
						</p>
					</div>
					<button className="btn btn-primary" onClick={() => router.push('/products')}>
						Voltar
					</button>
				</div>
			</div>
		</div>
	);
};

export default SuccessPage;
