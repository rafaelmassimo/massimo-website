'use client';

import React, { useState } from 'react';
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
	const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
	const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

	const handleImageLoad = () => {
		setLoadedImageCount((prev) => prev + 1);
	};

	const toggleFullScreen = (image: string) => {
		// Toggle full-screen mode by setting or clearing the full-screen image
		if (isFullScreen && fullScreenImage === image) {
			setIsFullScreen(false);
			setFullScreenImage(null);
		} else {
			setFullScreenImage(image);
			setIsFullScreen(true);
		}
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
							{loadedImageCount < images.length ? (
								<div className="absolute z-10 flex justify-center items-center bg-white/80 h-full w-full">
									<ColorRing colors={['#8e8484', '#d7d7d7', '#742008', '#9a1607', '#c50202']} />
								</div>
							) : null}

							<Image
								src={image}
								alt="image"
								className="block h-full object-cover cursor-zoom-in"
								sizes="100%"
								fill
								placeholder="blur"
								blurDataURL={`data:image/jpeg;base64,${image}`}
								onLoad={handleImageLoad}
								onClick={() => toggleFullScreen(image)}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Full-screen overlay */}
			{isFullScreen && fullScreenImage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 rounded-xl ">
					<Image
						src={fullScreenImage}
						alt="Full Screen"
						className="cursor-zoom-out rounded-xl object-contain" // Ensures aspect ratio is preserved
						onClick={() => toggleFullScreen(fullScreenImage)}
						fill
						
					/>
				</div>
			)}
		</div>
	);
};

export default Slider;
