import ContactForm from '@/app/components/ContactForm';
import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

const ContactPage = () => {
	return (
		<section className="h-full bg-base-100 rounded-md">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-slate-200 px-6 py-8 mb-4 shadow-md rounded-lg border m-4 md:m-0">
					<ContactForm />
				</div>

				<div className="divider divider-accent text-accent">OU</div>

				<div className="bg-base-300 px-6 py-8 mb-4 shadow-md rounded-lg border m-4 md:m-0">
					<h2 className="text-primary text-center text-xl mb-5">Entre em Contato Por Telefone</h2>

					<div className="flex flex-col justify-center items-center">
						<p className="flex items-center text-warning p-4 bg-secondary rounded-xl">
							<FaPhoneAlt className="text-black text-center mr-3" />
							+55 41 98805-2052
						</p>
					</div>

					<div className="flex flex-col justify-center items-center">
						<p className="flex items-center text-primary p-4 rounded-lg bg-base-100 mt-5">
							Para falar comigo pelo WhatsApp, clique no ícone abaixo
						</p>
						<Link href='https://w.app/ldDAEe' target='_blank' >
							<SiWhatsapp className="text-lime-600 text-center ml-3 w-10 h-10 mt-4 hover:scale-110 transition-transform duration-300" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
