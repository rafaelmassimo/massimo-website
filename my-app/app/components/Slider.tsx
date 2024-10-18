'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ColorRing } from 'react-loader-spinner';
const Slider = ({ images }: { images: string[] }) => {
	const [loadedImageCount, setLoadedImageCount] = useState<number>(0);

	const handleImageLoad = () => {
		setLoadedImageCount((prev) => prev + 1);
	};

	return (
		<div className="container">
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true,
					type: 'fraction',
				}}
				loop={images.length > 1}
				modules={[EffectFade, Navigation, Pagination]}
				className="h-96 w-full rounded-lg"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className="flex h-full w-full items-center justify-center relative">
							{/* Check if the current image is loaded */}
							{loadedImageCount <images.length ? (
								<div className="absolute z-10 flex justify-center items-center bg-white/80 h-full w-full">
									<ColorRing colors={['#8e8484', '#d7d7d7', '#742008', '#9a1607', '#c50202']} />
									
								</div>
							) : null}

							<Image
								src={image}
								alt="image"
								className="block h-full object-cover"
								sizes="100%"
								fill
								placeholder="blur"
								blurDataURL={`data:image/jpeg;base64,${image}`}
								onLoad={handleImageLoad}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
