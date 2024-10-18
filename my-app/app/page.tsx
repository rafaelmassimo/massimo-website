import addUser from './actions/addUser';
import Link from 'next/link';
import { videosOption } from '@/public/videos/videoExport';
import logo from '@/app/assets/images/m_m.png';
import Image from 'next/image';



export default async function Home() {
	// const user = await addUser('Elisvaldo', 'elisvaldo07@hotmail.com', 'carronovocarrovelho');
	const randomVideo = Math.floor(Math.random() * videosOption.length);

	return (
		<>
			<section className="relative h-screen">
				<video className="absolute w-full h-full object-cover" autoPlay loop muted>
					<source src={videosOption[randomVideo]} type="video/mp4" />
				</video>
				<div className="absolute w-full h-full bg-gradient-to-r from-black to-sky-900 opacity-60 z-10"></div>
				{/* Filter overlay */}
				<div className="absolute inset-0 flex flex-row items-center justify-center z-20">
					<div className="lg:flex justify-center items-center bg-gray-900/60 p-3 rounded-xl">
						<Image className='mx-auto' src={logo} alt="logo" width={300} height={300} style={{ width: 'auto', height: 'auto' }} />
						<div className="text-center">
							<h1 className="text-5xl font-bold text-white">Seja Bem-Vindo</h1>
							<h2 className="text-white text-xl mt-3">Conheça Nossos Trabalhos</h2>
							<div className="mt-4">
								<Link href="/products">
									<button
										type="button"
										className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
									>
										Acesse Aqui
										
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
