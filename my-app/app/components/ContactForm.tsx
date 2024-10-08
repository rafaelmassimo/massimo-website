import React from 'react';

const ContactForm = () => {
	return (
		<div>
			<h2 className="text-primary text-center text-xl mb-5">Entre em Contato Com Elisvaldo</h2>
			<form className="flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center items-center mb-4 w-10/12 gap-5">
					<label htmlFor="emailClient">
						<p className="text-secondary text-xl">Seu E-mail</p>
					</label>
					<input
						type="text"
						placeholder="Insira Aqui o Seu E-mail"
						name="emailClient"
						className="input input-bordered text-primary input-accent w-full max-w-xs"
					/>

					<label htmlFor="productCode">
						<p className="text-secondary text-xl">Código do Produto</p>
					</label>
					<input
						type="text"
						placeholder="Insira Aqui o Código do Produto"
						name="productCode"
						className="input input-bordered text-primary input-accent w-full max-w-xs"
					/>

					<label htmlFor="message">
						<p className="text-secondary text-xl">Sua Mensagem</p>
					</label>

					<textarea
						id="message"
						name="message"
						className="border rounded-lg w-full py-2 px-3 mb-2 h-32 overflow-y-scroll text-primary border-accent focus:outline outline-2 focus:outline-accent focus:outline-offset-2 "
						placeholder="Insira a Sua Mensagem para Elisvaldo"
					/>
				</div>

				<button
					type="button"
					className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					Enviar Mensagem
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
