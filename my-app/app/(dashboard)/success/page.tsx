'use client';

import { useRouter } from 'next/navigation';

const SuccessPage = () => {
	const router = useRouter();

	const handleBackToHome = () => {
		router.push('/products'); // Adjust to your homepage or another route
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 shadow-lg rounded-lg max-w-md text-center">
				<h1 className="text-3xl font-bold text-green-500 mb-4 tracking-wide">Mensagem Enviada!</h1>
				<p className="text-gray-700 mb-6 tracking-wide">Sua mensagem foi enviada e responderemos assim que possível!</p>
				<button
					onClick={handleBackToHome}
					className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
				>
					Voltar para a Home
				</button>
			</div>
		</div>
	);
};

export default SuccessPage;
