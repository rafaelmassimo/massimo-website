import type { Metadata } from 'next';
import {SessionProvider} from '../app/components/AuthProvider';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Massimo & Massimo WebSite',
	description: 'Portfolio para compartilhar os serviços de Massimo & Massimo',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<SessionProvider>
				<body className={montserrat.className}>{children}</body>
			</SessionProvider>
		</html>
	);
}
