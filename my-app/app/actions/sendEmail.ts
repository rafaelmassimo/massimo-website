'use server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENBGRID_API_KEY ?? '');

export const sendEmail = async (formData: FormData) => {
	const emailClient = formData.get('emailClient') as string | null;
	const productCode = formData.get('productCode') as string | null;
	const message = (formData.get('message') as string | null) ?? '';

	const msg = {
		to: 'rafael_massimo@hotmail.com', // recipient email
		from: 'rafaelmassimocanada@gmail.com', // replace with your verified sender email
		subject: `Contact Form Submission - ${productCode}`,
		text: `Código do Produto: ${productCode}\nEmail do cliente para retornar: ${emailClient}\n\nMensagem:\n\n${message}`,
	};

	try {
		const res = await sgMail.send(msg);
		if (res[0].statusCode === 202) {
			return { status: 200 };
		}
	} catch (error) {
		console.error(error);
		throw new Error('Error sending email');
	}
};
