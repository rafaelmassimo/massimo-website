import Link from 'next/link';
import React, { useRef } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import sofy from '@/app/assets/sofy.png';
import { FaQuestion } from 'react-icons/fa';

const Sofy = () => {
	// Create a reference to the audio element
	const audioRef = useRef<HTMLAudioElement>(null);

	// Function to play the audio on hover
	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.volume = 0.1;
			audioRef.current.play();
		}
	};

	return (
		<>
			<section className="px-4 py-6 bg-base-200">
            <Link href="/find-product" className="flex flex-row  text-blue-500 mt-2">
				<span className="flex justify-center bg-base-300 text-indigo-800 text-s me-2 px-2.5 py-0.5 rounded">
					<IoIosArrowRoundBack className="w-6 h-6" />
					Voltar para a Busca de Produtos
				</span>
			</Link>
				<div className="container-xl lg:container m-auto flex flex-col items-center justify-center">
					<h2 className="text-3xl font-bold text-primary mb-6 text-center ">
						Produto não encontrado!
					</h2>
						<h1 className='text-xl mb-6 text-gray-700 font-bold'>Tente de Novo</h1>
					<div className="w-96 flex flex-col justify-center items-center">
						<FaQuestion className="w-24 h-24 text-blue-500 text-center" />
						<Image
							src={sofy}
							alt="sofy"
							className="mr-28 hover:scale-110 transition duration-300 cursor-grab"
							onMouseEnter={playAudio} // Trigger audio on hover
						/>
						<p>*Se me encostar vou te cheirar*</p>
						{/* Audio element */}
						<audio ref={audioRef} src="/audio/dog.mp3" preload="auto" />
					</div>
				</div>
			</section>
			
		</>
	);
};

export default Sofy;
