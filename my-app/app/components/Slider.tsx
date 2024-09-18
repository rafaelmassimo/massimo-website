'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { images } from '@/app/assets/images/images';

const Slider = () => {
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
				loop={true}
				modules={[EffectFade, Navigation, Pagination]}
				className="h-96 w-full rounded-lg"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className="flex h-full w-full items-center justify-center">
							<Image src={image.src} alt="image" className="block h-full object-cover" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
