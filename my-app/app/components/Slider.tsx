'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Triangle } from 'react-loader-spinner';


const Slider = ({ images }: { images: string[] }) => {
	const [loadedImage, setLoadedImage] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (loadedImage === images.length) {
			setLoading(false);
			console.log('all loaded');
		}
	}, [loadedImage, images.length]);

	const handleLoading = () => {
		setLoadedImage((prev) => {
			const newLoadedImage = prev + 1;
			console.log('Loaded Image:', newLoadedImage);
			return newLoadedImage;
		});
	};
	return (
		<>
			{loading ? (
				<div className="flex justify-center">
					<Triangle color="#00BFFF" height={100} width={100} />
				</div>
			) : (
				<div className="container ">
					<Swiper
						spaceBetween={30}
						effect={'fade'}
						navigation={true}
						pagination={{
							clickable: true,
							type: 'fraction',
						}}
						loop={true}
						modules={[EffectFade, Navigation, Pagination]}
						className="h-96 w-full rounded-lg"
					>
						{images.map((image, index) => (
							<SwiperSlide key={index}>
								<div className="flex h-full w-full items-center justify-center relative">
									{/* //* Add fill to avoid to add width and height to the image */}
									<Image
										src={image}
										alt="image"
										className="block h-full object-cover"
										sizes="100%"
										fill
										placeholder="blur"
										blurDataURL='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect x="0" y="0" width="100" height="100" fill="%23f3f4f6" /%3E%3C/svg%3E'
										// onLoadingComplete={handleLoading}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</>
	);
};

export default Slider;
