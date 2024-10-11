'use server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENBGRID_API_KEY ?? '');

export const sendEmail = async (formData: FormData) => {
	const emailClient = formData.get('emailClient') as string | null;
	const productCode = formData.get('productCode') as string | null;
	const clientName = formData.get('nameClient') as string | null;
	const clientNumber = formData.get('numberClient') as string | null;
	const message = (formData.get('message') as string | null) ?? '';

	const msg = {
		to: 'elisvaldo07@hotmail.com', // recipient email
		from: 'rafaelmassimocanada@gmail.com', // replace with your verified sender email
		subject: `Envio De Formulário Para Contato - Web Site`,
		text: `Nome Cliente: ${clientName}\nTelefone do Cliente: ${clientNumber}\nEmail do cliente para retornar: ${emailClient}\nCódigo Produto: ${productCode}\n\nMensagem:\n\n${message}`,
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
