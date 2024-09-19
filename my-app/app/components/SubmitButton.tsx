'use client';
import { useFormStatus } from 'react-dom';

// NOTE: Give the user some feedback about the form submission before being
// redirected by using a SubmitButton component that uses the useFormStatus hook

function SubmitButton({ pendingText = 'Adicionando Produto...', text = 'Adicionar Produto' }) {
	const status = useFormStatus();
	return (
		<button
			className="bg-blue-400 text-white hover:bg-blue-600 font-bold py-2 px-4 shadow-xl rounded-full w-full focus:outline-none mt-3 transition duration-100 focus:translate-y-1 focus:shadow-none"
			type="submit"
			disabled={status.pending}
		>
			{status.pending ? pendingText : text}
		</button>
	);
}

export default SubmitButton;
